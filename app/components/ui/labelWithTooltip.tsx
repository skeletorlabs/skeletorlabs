"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tooltip: string;
}

export default function LabelWithTooltip({ children, tooltip }: Props) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="group flex items-center outline-none cursor-help text-left">
            <div className="text-white/60 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-200">
              {children}
            </div>
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            sideOffset={12}
            className="z-[999] w-56 p-3 bg-[#121225]/95 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl overflow-visible relative"
          >
            <p className="text-[12px] leading-snug text-white/90 font-normal text-center font-sans italic">
              {tooltip}
            </p>

            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 leading-[0]">
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8L0 0H16L8 8Z" fill="white" fillOpacity="0.13" />
                <path d="M8 7L1 0H15L8 7Z" fill="#121225" />
              </svg>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
