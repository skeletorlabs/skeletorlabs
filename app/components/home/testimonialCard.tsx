import { getAvatar } from "@/app/lib/avatar";
import { TestimonialData } from "@/app/lib/ipfs";
import { shortener } from "@/app/utils/shortener";
import {
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAppKitAccount } from "@reown/appkit/react";
import classNames from "classnames";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  testimonial: TestimonialData;
  owner: string;
  userLiked: boolean;
  deactivateTestimonial: (id: number | undefined) => void;
  likeTestimonial: (id: number | undefined) => void;
};

export default function TestimonialCard({
  testimonial,
  owner,
  userLiked,
  deactivateTestimonial,
  likeTestimonial,
}: Props) {
  const avatar = getAvatar(testimonial?.address || "");
  const { address } = useAppKitAccount();
  const [canDeactivate, setCanDeactivate] = useState(false);

  useEffect(() => {
    const _address = address?.toLowerCase();
    const _author = testimonial?.address?.toLowerCase();
    const _owner = owner.toLowerCase();

    setCanDeactivate(_address === _author || _address === _owner);
  }, [address, testimonial, setCanDeactivate]);

  return (
    <div className="flex flex-col justify-between relative w-full max-w-md xl:max-w-lg even:bg-skeletor-gray/60 odd:bg-skeletor-gray/90 backdrop-blur-lg text-white border even:border-white/10 odd:border-white/5 rounded-xl shadow-md overflow-hidden transition-all even:hover:bg-skeletor-gray/90 odd:hover:bg-skeletor-gray/50">
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-violet-500 border-r-[50px] border-r-transparent" />
      <div
        className={classNames({
          "absolute bottom-0 right-0 w-0 h-0 border-b-[50px] border-b-violet-500 border-l-[50px] border-l-transparent":
            true,
          hidden: !canDeactivate,
          block: canDeactivate,
        })}
      />
      <ChatBubbleBottomCenterTextIcon
        width={20}
        height={20}
        className="absolute top-[5px] left-[5px] text-white"
      />

      <div className="absolute top-6 right-6 flex items-center gap-1">
        <button
          disabled={canDeactivate || userLiked}
          onClick={() => likeTestimonial(testimonial?.id)}
          className={classNames({
            "transition-all hover:scale-105 mt-[-2px]": true,
            "text-white/50 hover:text-white": !canDeactivate && !userLiked,
            "text-white/20 ": canDeactivate,
            "text-white": userLiked,
          })}
        >
          <StarIcon width={20} height={20} />
        </button>
        <span>{testimonial?.likes || 0}</span>
      </div>

      <button
        disabled={testimonial?.id === undefined}
        onClick={() => deactivateTestimonial(testimonial?.id)}
        className={classNames({
          "absolute bottom-[6px] right-[6px] flex items-center gap-2 transition-all text-xs tracking-tighter hover:opacity-80":
            true,
          hidden: !canDeactivate,
          block: canDeactivate,
        })}
      >
        <XMarkIcon
          width={18}
          height={18}
          className="transition-all text-white hover:scale-105"
        />
      </button>

      <div className="flex items-center gap-3 p-6 pl-10">
        <Image
          src={avatar}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full bg-white/10 p-1"
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight">
            {testimonial.name}
          </span>
          <span className="text-sm text-violet-300  leading-tight">
            {testimonial.role}
          </span>
        </div>
      </div>
      <div className="px-6 pl-10 pb-6 pt-2">
        <p className="text-sm text-white/80 leading-relaxed italic">
          "{testimonial.message}"
        </p>
      </div>
      <div className="flex flex-col px-6 pb-4 text-right text-xs text-white/30">
        {shortener(testimonial?.address || "", 5)}
      </div>
    </div>
  );
}
