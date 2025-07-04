import { Contract, JsonRpcProvider, Signer } from "ethers";
import { TESTIMONIAL_REGISTRY_ABI } from "./abis";
import handleError from "../utils/handleErrors";
import { notificateTx } from "../utils/notificateTx";
import { ipfsHashToBytes32 } from "../utils/bytes32Conversor";
import { TestimonialData, uploadTestimonialToIPFS } from "../lib/ipfs";

export type StoredTestimonial = {
  id: number;
  author: string;
  hash: string;
  timestamp: number;
  likes: number;
  active: boolean;
};

export type UserLike = { id: number; liked: boolean };
async function getRpcUrl() {
  const res = await fetch("/api/internal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data.baseRPC;
}

async function getContract(signer?: Signer): Promise<Contract | undefined> {
  const ADDRESS = "0x1b4c7cC88e22C0518a3BF279FbC0ab37a6fa442B";

  try {
    const RPC = await getRpcUrl();
    const provider = new JsonRpcProvider(RPC);
    const contract = new Contract(
      ADDRESS,
      TESTIMONIAL_REGISTRY_ABI,
      signer || provider
    );
    return contract;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function getOwner(): Promise<string | undefined> {
  try {
    const contract = await getContract();
    const owner = await contract?.owner();
    return owner;
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
    const contract = await getContract(signer);
    const id = await contract?.nextId(); // get next testimonial ID
    data.id = Number(id); // update to use correct contract testimonial ID
    const hash = await uploadTestimonialToIPFS(data); // upload to pinata & get the hash
    const network = await signer.provider?.getNetwork();
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
    const contract = await getContract(signer);
    const network = await signer.provider?.getNetwork();
    const tx = await contract?.like(id);

    await notificateTx(tx, network);
  } catch (error) {
    await handleError({ e: error as Error, notificate: true });
  }
}

export async function testimonialById(
  id: number
): Promise<StoredTestimonial | undefined> {
  try {
    const contract = await getContract();
    const stored = await contract?.testimonialById(id);

    const testimonial: StoredTestimonial = {
      id: Number(stored[0]),
      author: stored[1],
      hash: stored[2],
      timestamp: Number(stored[3]),
      likes: Number(stored[4]),
      active: stored[5],
    };

    return testimonial;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function deactivate(id: number, signer: Signer) {
  console.log(id);
  try {
    const contract = await getContract(signer);
    const owner = await contract?.owner();
    const signerAddress = await signer.getAddress();
    const stored = await testimonialById(id);
    console.log(stored?.author);
    console.log(owner);
    console.log(signerAddress);
    console.log(
      stored &&
        stored?.active &&
        (stored?.author === owner || stored?.author === signerAddress)
    );

    if (
      stored &&
      stored?.active &&
      (signerAddress === owner || signerAddress === stored?.author)
    ) {
      console.log("on deactivate");
      const network = await signer.provider?.getNetwork();
      const tx = await contract?.deactivate(id);
      await notificateTx(tx, network);
    }
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function all(): Promise<StoredTestimonial[] | undefined> {
  try {
    const contract = await getContract();
    const ids = await contract?.nextId();

    let testimonials: StoredTestimonial[] = [];

    for (let id = 0; id < ids; id++) {
      const stored = await testimonialById(id);
      if (stored && stored.active) testimonials.push(stored);
    }

    return testimonials;
  } catch (error) {
    await handleError({ e: error as Error });
  }
}

export async function likedByUser(
  ids: number[],
  address: string
): Promise<UserLike[] | undefined> {
  try {
    const contract = await getContract();
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
