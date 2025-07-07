import Subtitle from "../subtitle";
import { readTestimonialsFromIPFS, TestimonialData } from "@/app/lib/ipfs";
import { useCallback, useContext, useEffect, useState } from "react";
import TestimonialCard from "./testimonialCard";
import {
  all,
  getOwner,
  like,
  deactivate,
  UserLike,
  likedByUser,
} from "@/app/contracts/testimonialRegistry";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider } from "ethers";
import NewTestimonial from "../newTestimonial";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";
import ConnectButton from "../connectButton";
import LoadingBox from "../loadingBox";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  1260: { items: 2 },
};

export default function Testimonials() {
  const [collection, setCollection] = useState<TestimonialData[] | undefined>();
  const [owner, setOwner] = useState("");
  const [userLikes, setUserLikes] = useState<UserLike[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<JSX.Element[] | undefined>(undefined);

  const { refreshTestimonials } = useContext(StateContext);
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const fetchTestimonials = useCallback(async () => {
    const storedTestimonials = await all();
    if (storedTestimonials) {
      const ipfsTestimonials =
        await readTestimonialsFromIPFS(storedTestimonials);
      setCollection(ipfsTestimonials || []);
    }
    const _owner = await getOwner();
    if (_owner) setOwner(_owner);
  }, [setCollection, setOwner]);

  const fetchUserLikes = useCallback(async () => {
    if (collection && address) {
      const ids: number[] = collection.map((item) => item.id!);
      const _userLikes = await likedByUser(ids, address);
      setUserLikes(_userLikes || []);
    }
  }, [collection, address, setUserLikes]);

  const deactivateTestimonial = useCallback(
    async (id: number | undefined) => {
      if (id === undefined) return;
      setLoading(true);
      const provider = new BrowserProvider(walletProvider as any);
      const signer = await provider.getSigner();
      await deactivate(id, signer);
      await fetchTestimonials();
      setLoading(false);
    },
    [walletProvider, fetchTestimonials, setLoading]
  );

  const likeTestimonial = useCallback(
    async (id: number | undefined) => {
      if (id === undefined) return;
      setLoading(true);
      const provider = new BrowserProvider(walletProvider as any);
      const signer = await provider.getSigner();
      await like(id, signer);
      await fetchTestimonials();
      setLoading(false);
    },
    [walletProvider, fetchTestimonials]
  );

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  useEffect(() => {
    if (refreshTestimonials) fetchTestimonials();
  }, [refreshTestimonials, fetchTestimonials]);

  // Load carousel
  useEffect(() => {
    const _items = collection?.map((item, index) => (
      <TestimonialCard
        key={index}
        testimonial={item}
        owner={owner.toLowerCase()}
        userLiked={
          (userLikes &&
            userLikes.find((userLike) => userLike.id === item.id)?.liked) ||
          false
        }
        deactivateTestimonial={deactivateTestimonial}
        likeTestimonial={likeTestimonial}
      />
    ));

    setItems(_items);

    // Set Loading to false only when collection is loaded, even if is empty.
    if (collection) setLoading(false);
  }, [
    collection,
    owner,
    deactivateTestimonial,
    likeTestimonial,
    setLoading,
    setItems,
    userLikes,
  ]);

  useEffect(() => {
    fetchUserLikes();
  }, [address, collection, fetchUserLikes]);

  return (
    <div className="relative">
      <div className="flex flex-col px-8 xl:px-14 py-10 gap-10 min-h-[200] xl:min-h-[440px]">
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-0 justify-between items-center">
          <Subtitle
            text="What Partners Say"
            description="Feedback from teams we've worked with"
          />
          {isConnected ? <NewTestimonialButton /> : <ConnectButton />}
        </div>

        {!loading && collection && collection.length === 0 && (
          <div className="flex items-center justify-center xl:justify-start gap-3 min-h-[200px] text-violet-200 text-lg md:text-3xl font-extralight italic">
            — Be the first to leave feedback.
            <PencilSquareIcon
              width={30}
              height={30}
              className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
            />
          </div>
        )}

        {!loading && items && items?.length > 0 && (
          <AliceCarousel
            responsive={responsive}
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
          >
            {items}
          </AliceCarousel>
        )}
      </div>
      <NewTestimonial />
      {loading && <LoadingBox />}
    </div>
  );
}
