import Image from "next/image";
import { useAppKitAccount } from "@reown/appkit/react";
import Connected from "./connected";
import { SOCIALS } from "../utils/conts";
import Link from "next/link";
import classNames from "classnames";
import { mail } from "../utils/svgs";
import { useContext } from "react";
import { StateContext } from "../context/state";
import {
  BeakerIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const NAV_LINKS = [
  {
    name: "About",
    href: "#about",
    icon: <CommandLineIcon width={14} height={14} />,
  },
  {
    name: "Services",
    href: "#services",
    icon: <CubeIcon width={14} height={14} />,
  },
  {
    name: "Companies",
    href: "#companies",
    icon: <StarIcon width={14} height={14} />,
  },
  {
    name: "Contributions",
    href: "#contributions",
    icon: <CodeBracketIcon width={14} height={14} />,
  },
  { name: "Labs", href: "#labs", icon: <BeakerIcon width={14} height={14} /> },
  {
    name: "Team",
    href: "#team",
    icon: <UserGroupIcon width={14} height={14} />,
  },
];

export default function Nav() {
  const { address } = useAppKitAccount();
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <div className="flex fixed w-full xl:w-[1280px] h-[100px] items-center justify-center lg:justify-between mt-10 px-8 xl:px-14 bg-violet-500/10 backdrop-blur-md z-30">
      <Image
        src="/logo-text.svg"
        width={277}
        height={77}
        alt="logo"
        className="transition-all duration-200 scale-75 md:scale-100"
      />

      <div className="hidden lg:flex w-full justify-end items-center h-full">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex justify-center items-center gap-2 text-violet-300 transition-all duration-200 text-sm
             hover:bg-skeletor-dark-violet hover:text-violet-200
             w-max px-4 h-full"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
        {/* <div className="flex flex-col justify-center items-center gap-1 py-4 md:py-0">
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
        </div> */}
      </div>
    </div>
  );
}
