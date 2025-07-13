import { getAvatar } from "@/app/lib/avatar";
import { TestimonialData } from "@/app/lib/ipfs";
import { shortener } from "@/app/utils/shortener";
import {
  ChatBubbleBottomCenterTextIcon,
  // StarIcon,
} from "@heroicons/react/20/solid";
import { base, hederaTestnet } from "@reown/appkit/networks";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import classNames from "classnames";
import Image from "next/image";

import { Inter } from "next/font/google";
import { CHAIN_ID_TO_ICON } from "@/app/utils/conts";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  testimonial: TestimonialData;
  owner: string;
  // userLiked: boolean;
  deactivateTestimonial: (id: number | undefined) => void;
  // likeTestimonial: (id: number | undefined) => void;
};

export default function TestimonialCard({
  testimonial,
  owner,
  // userLiked,
  deactivateTestimonial,
  // likeTestimonial,
}: Props) {
  const avatar = getAvatar(testimonial?.address || "");
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  const _address = address?.toLowerCase();
  const _author = testimonial.address?.toLowerCase();
  const _owner = owner.toLowerCase();

  const canRemove =
    isConnected &&
    (Number(chainId) === base.id || Number(chainId) === hederaTestnet.id) &&
    (_address === _owner || _address === _author);

  // const canLike =
  //   isConnected &&
  //   (Number(chainId) === base.id || Number(chainId) === hederaTestnet.id) &&
  //   _address !== _owner &&
  //   _address !== _author &&
  //   !userLiked;

  return (
    <div className="flex flex-col justify-between w-full lg:max-w-md xl:max-w-[34rem] even:bg-skeletor-gray/60 odd:bg-skeletor-gray/90 backdrop-blur-lg text-white border even:border-white/10 odd:border-white/5 rounded-xl shadow-md overflow-hidden transition-all duration-200 even:hover:bg-skeletor-gray/90 odd:hover:bg-skeletor-gray/50 relative">
      {/* TOP-LEFT ICON */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-violet-500 border-r-[50px] border-r-transparent" />
      <ChatBubbleBottomCenterTextIcon
        width={20}
        height={20}
        className="absolute top-[5px] left-[5px] text-white"
      />

      {/* LIKES */}
      {/* <div className="absolute top-6 right-6 flex items-center gap-1"> */}
      {/* BUTTON STAR */}
      {/* <button */}
      {/* disabled={!canLike} */}
      {/* onClick={() => likeTestimonial(testimonial?.id)} */}
      {/* className={classNames({ */}
      {/* "transition-all duration-200 hover:scale-105 mt-[-2px]": true, */}
      {/* "text-white/10": !isConnected || (!canLike && !userLiked), */}
      {/* "text-white/50 hover:text-white": */}
      {/* isConnected && canLike && !userLiked, */}
      {/* "text-yellow-300": isConnected && userLiked, */}
      {/* })} */}
      {/* > */}
      {/* <StarIcon width={20} height={20} /> */}
      {/* </button> */}
      {/* NUMBER OF LIKES */}
      {/* <span className="text-white/70">{testimonial?.likes || 0}</span> */}
      {/* </div> */}

      <Image
        src={CHAIN_ID_TO_ICON[testimonial.chainId || base.id]}
        width={24}
        height={24}
        alt="chain"
        className="absolute top-6 right-6 "
      />

      {/* USER DETAILS */}
      <div className="flex items-center gap-3 p-6 pb-4 xl:pb-6 pl-10">
        <Image
          src={avatar}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full bg-white/10 xl:p-1 w-[28px] h-[28px] xl:w-[48px] xl:h-[48px]"
        />
        <div className="flex flex-col">
          <span className="text-sm xl:text-lg font-bold leading-tight">
            {testimonial.name}
          </span>
          <span className="text-xs xl:text-sm text-violet-300  leading-tight">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="px-6 pl-10 pb-6">
        <p
          className={`text-sm text-white/70 !leading-relaxed ${inter.className} !italic`}
        >
          "{testimonial.message}"
        </p>
      </div>

      {/* REMOVE & ADDRESS CONTAINER */}
      <div className="flex justify-end items-center gap-3 px-3 py-2 text-right text-xs text-white/50 bg-skeletor-dark-violet/80 xl:min-h-[50px] border-t border-skeletor-dark-violet">
        {/* REMOVE BUTTON */}
        <button
          disabled={testimonial?.id === undefined}
          onClick={() => deactivateTestimonial(testimonial?.id)}
          className={classNames({
            "flex items-center justify-center gap-1 text-xs text-white/70 tracking-tighter hover:opacity-80 bg-violet-500 transition-colors duration-200 hover:bg-violet-400 hover:text-white rounded-full p-1 px-3": true,
            hidden: !canRemove,
            block: canRemove,
          })}
        >
          <span>Discard</span>
        </button>
        {/* AUTHOR ADDRESS */}
        <span className="bg-white/5 rounded-full p-1 px-2">
          {shortener(testimonial?.address || "", 5)}
        </span>
      </div>
    </div>
  );
}
