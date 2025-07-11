import Subtitle from "../subtitle";
import { readTestimonialsFromIPFS, TestimonialData } from "@/app/lib/ipfs";
import { useCallback, useContext, useEffect, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { all, deactivate } from "@/app/contracts/testimonialRegistry";
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

export type TestimonialsByChain = {
  chainId: number;
  owner: string;
  testimonialsList: TestimonialData[];
};

export default function Testimonials() {
  const [collection, setCollection] = useState<
    TestimonialsByChain[] | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<JSX.Element[] | undefined>(undefined);

  const { refreshTestimonials } = useContext(StateContext);
  const { isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const fetchTestimonials = useCallback(async () => {
    const allTestimonials = await all();
    if (!allTestimonials) return;

    const chainsToTestimonials: TestimonialsByChain[] = [];

    for (const chainTestimonials of allTestimonials) {
      const ipfsTestimonials = await readTestimonialsFromIPFS(
        chainTestimonials.testimonialsList
      );
      chainsToTestimonials.push({
        chainId: chainTestimonials.chainId,
        owner: chainTestimonials.owner,
        testimonialsList: ipfsTestimonials || [],
      });
    }

    setCollection(chainsToTestimonials);
  }, [setCollection]);

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

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  useEffect(() => {
    if (refreshTestimonials) fetchTestimonials();
  }, [refreshTestimonials, fetchTestimonials]);

  // Load carousel
  useEffect(() => {
    const allItems: JSX.Element[] = [];

    for (const collectionItem of collection || []) {
      const _items = collectionItem.testimonialsList.map(
        (testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            owner={collectionItem.owner}
            deactivateTestimonial={deactivateTestimonial}
          />
        )
      );

      allItems.push(..._items);
    }

    if (allItems) setItems(allItems);
    if (collection) setLoading(false);
  }, [collection, deactivateTestimonial, setLoading, setItems]);

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
