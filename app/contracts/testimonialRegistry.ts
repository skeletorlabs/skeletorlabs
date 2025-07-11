import { Contract, JsonRpcProvider, Signer } from "ethers";
import { TESTIMONIAL_REGISTRY_ABI } from "./abis";
import handleError from "../utils/handleErrors";
import { notificateTx } from "../utils/notificateTx";
import { ipfsHashToBytes32 } from "../utils/bytes32Conversor";
import { TestimonialData, uploadTestimonialToIPFS } from "../lib/ipfs";
import { base, hederaTestnet } from "@reown/appkit/networks";
import { TESTIMONIAL_REGISTRY_ADDRESSES } from "../utils/conts";
import { allowedNetworks } from "../context/web3modal";

export type StoredTestimonial = {
  id: number;
  author: string;
  hash: string;
  timestamp: number;
  likes: number;
  active: boolean;
  chainId: number; // Added to store chain ID
};

export type TestimonialsByChain = {
  chainId: number;
  owner: string;
  testimonialsList: StoredTestimonial[];
};

export type UserLike = { id: number; liked: boolean };

async function getRpcUrl(chainId: number) {
  switch (chainId) {
    case hederaTestnet.id:
      return hederaTestnet.rpcUrls.default.http[0];
    case base.id:
      const res = await fetch("/api/internal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      return data.baseRPC;
    default:
      console.warn(`No RPC URL configured for chainId: ${chainId}`);
      return undefined;
  }
}

async function getContract(
  chainId: number,
  signer?: Signer
): Promise<Contract | undefined> {
  try {
    const RPC = await getRpcUrl(chainId);
    const provider = new JsonRpcProvider(RPC);
    const contract = new Contract(
      TESTIMONIAL_REGISTRY_ADDRESSES[chainId],
      TESTIMONIAL_REGISTRY_ABI,
      signer || provider
    );
    return contract;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function store(
  data: TestimonialData,
  signer: Signer
): Promise<boolean> {
  let stored = false;

  try {
    const network = await signer.provider?.getNetwork();
    const chainIdNumber = Number(network?.chainId);
    const contract = await getContract(chainIdNumber, signer);
    const id = Number(await contract?.nextId()); // get next testimonial ID
    data.id = id; // update to use correct contract testimonial ID
    const hash = await uploadTestimonialToIPFS(chainIdNumber, data); // upload to pinata & get the hash
    const hashBytes32 = ipfsHashToBytes32(hash); // convert hash to bytes32
    const tx = await contract?.store(hashBytes32); // store hash (bytes32) on contract
    await notificateTx(tx, network);
    stored = true;
    return stored;
  } catch (error) {
    await handleError({ e: error as Error, notificate: true });
    return stored;
  }
}

export async function like(id: number, signer: Signer) {
  try {
    const network = await signer.provider?.getNetwork();
    const contract = await getContract(Number(network?.chainId), signer);
    const tx = await contract?.like(id);

    await notificateTx(tx, network);
  } catch (error) {
    await handleError({ e: error as Error, notificate: true });
  }
}

export async function testimonialById(
  chainId: number,
  id: number
): Promise<StoredTestimonial | undefined> {
  try {
    const contract = await getContract(chainId);
    const stored = await contract?.testimonialById(id);

    const testimonial: StoredTestimonial = {
      id: Number(stored[0]),
      author: stored[1],
      hash: stored[2],
      timestamp: Number(stored[3]),
      likes: Number(stored[4]),
      active: stored[5],
      chainId: chainId,
    };

    return testimonial;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function deactivate(id: number, signer: Signer) {
  try {
    const network = await signer.provider?.getNetwork();
    const chainId = Number(network?.chainId);
    const contract = await getContract(chainId, signer);
    const owner = await contract?.owner();
    const signerAddress = await signer.getAddress();
    const stored = await testimonialById(chainId, id);

    if (
      stored &&
      stored?.active &&
      (signerAddress === owner || signerAddress === stored?.author)
    ) {
      const tx = await contract?.deactivate(id);
      await notificateTx(tx, network);
    }
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function allFromChain(
  chainId: number
): Promise<TestimonialsByChain | undefined> {
  try {
    const contract = await getContract(chainId);
    const ids = await contract?.nextId();
    const owner = await contract?.owner();

    let testimonials: StoredTestimonial[] = [];

    for (let id = 0; id < ids; id++) {
      const stored = await testimonialById(chainId, id);
      if (stored && stored.active) testimonials.push(stored);
    }

    return { chainId, owner, testimonialsList: testimonials };
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function all(): Promise<TestimonialsByChain[] | undefined> {
  try {
    const testimonialsByChain: TestimonialsByChain[] = [];
    for (const chain of allowedNetworks) {
      const chainId = Number(chain.id);
      const testimonials = await allFromChain(chainId);
      if (testimonials) {
        const { chainId, owner, testimonialsList } = testimonials;
        testimonialsByChain.push({ chainId, owner, testimonialsList });
      }
    }
    return testimonialsByChain;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function likedByUser(
  chainId: number,
  ids: number[],
  address: string
): Promise<UserLike[] | undefined> {
  try {
    const contract = await getContract(chainId);
    const userLikes: UserLike[] = [];
    for (let index = 0; index < ids.length; index++) {
      const liked = await contract?.likedBy(ids[index], address);
      userLikes.push({ id: ids[index], liked: liked });
    }

    return userLikes;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}
