import Image from "next/image";
import { useAppKitAccount } from "@reown/appkit/react";
import Connected from "./connected";
import { SOCIALS } from "../utils/conts";
import Link from "next/link";
import classNames from "classnames";
import { mail } from "../utils/svgs";
import { useContext } from "react";
import { StateContext } from "../context/state";

export default function Nav() {
  const { address } = useAppKitAccount();
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <div className="flex flex-col md:flex-row min-h-[100px] items-center justify-between mt-10 px-8 xl:px-14">
      <Image
        src="/logo-text.svg"
        width={277}
        height={77}
        alt="logo"
        className="transition-all duration-200 scale-75 md:scale-100"
      />

      <div className="flex flex-col w-full justify-center md:items-end gap-2">
        <div className="flex flex-col justify-center items-center gap-1 py-4 md:py-0">
          <div
            className={classNames({
              "flex items-center gap-1": true,
              "md:gap-3": !address,
            })}
          >
            {SOCIALS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="blank"
                className={classNames({
                  "transition-all duration-200 text-violet-200 hover:text-violet-300 scale-75": true,
                  "hover:scale-90": address,
                  "md:scale-90 hover:scale-105": !address,
                })}
              >
                {item.icon}
              </Link>
            ))}
            <button
              onClick={() => setTalkIsOpen(true)}
              className={classNames({
                "transition-all duration-200 text-violet-200 hover:text-violet-300 scale-75": true,
                "hover:scale-90": address,
                "md:scale-90 hover:scale-105": !address,
              })}
            >
              {mail}
            </button>
          </div>
          {address && <Connected />}
        </div>
      </div>
    </div>
  );
}
