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
import classNames from "classnames";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider } from "ethers";
import NewTestimonial from "../newTestimonial";
import { StateContext } from "@/app/context/state";
import Loading from "../loading";
import NewTestimonialButton from "./newTestimonialButton";

export default function Testimonials() {
  const [collection, setCollection] = useState<TestimonialData[]>([]);
  const [owner, setOwner] = useState("");
  const [userLikes, setUserLikes] = useState<UserLike[] | undefined>();
  const [loading, setLoading] = useState(true);
  const { refreshTestimonials } = useContext(StateContext);

  const { address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const fetchTestimonials = useCallback(async () => {
    const storedTestimonials = await all();
    if (storedTestimonials) {
      const ipfsTestimonials = await readTestimonialsFromIPFS(
        storedTestimonials
      );
      if (ipfsTestimonials) setCollection(ipfsTestimonials);
    }
    const _owner = await getOwner();
    if (_owner) setOwner(_owner);
  }, [setCollection, setOwner]);

  const fetchUserLikes = useCallback(async () => {
    if (collection.length > 0 && address) {
      const ids: number[] = collection.map((item) => item.id!);
      const _userLikes = await likedByUser(ids, address);
      if (_userLikes) setUserLikes(_userLikes);
    }
    setLoading(false);
  }, [collection, address, setLoading, setUserLikes]);

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
    [walletProvider, deactivate, fetchTestimonials, setLoading]
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
    [walletProvider]
  );

  useEffect(() => {
    if (refreshTestimonials) fetchTestimonials();
  }, [refreshTestimonials]);

  useEffect(() => {
    fetchUserLikes();
  }, [address, collection]);

  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <>
      <div
        className={classNames({
          "flex-col px-8 xl:px-14 py-10 gap-10": true,
          flex: collection.length > 0,
          hidden: collection.length == 0,
        })}
      >
        <Subtitle
          text="Feedbacks"
          description="What people have to say about work & partnerships"
        />

        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-row justify-center xl:justify-between flex-wrap gap-4">
            {collection.map((item, index) => (
              <TestimonialCard
                key={index}
                testimonial={item}
                owner={owner.toLowerCase()}
                userLiked={
                  (userLikes &&
                    userLikes.find((userLike) => userLike.id === item.id)
                      ?.liked) ||
                  false
                }
                deactivateTestimonial={deactivateTestimonial}
                likeTestimonial={likeTestimonial}
              />
            ))}

            {/* MOBILE */}
            <div className="flex xl:hidden w-full justify-center">
              <NewTestimonialButton />
            </div>

            {/* DESKTOP */}
            <div className="hidden xl:flex justify-end w-full mt-6 pb-4">
              <NewTestimonialButton invert />
            </div>
          </div>
        )}
      </div>
      <NewTestimonial />
    </>
  );
}
