import Image from "next/image";
import Subtitle from "../subtitle";

export default function About() {
  return (
    <div
      id="services"
      className="flex flex-col px-8 xl:px-14 py-10 gap-10  bg-skeletor-dark-violet"
    >
      <Subtitle
        text="About Skeletor Labs"
        description="We're a Web3-native dev collective conjuring contracts, dApps, and decentralized systems from the crypt."
      />

      <div className="flex content pb-10">
        <div className="item-body flex flex-col gap-6 w-full text-gray-300 text-xl leading-relaxed">
          <p>
            <strong className="text-white">Skeletor Labs</strong> is a
            Web3-native development studio conjuring smart contracts, dApps, and
            decentralized systems from code and chaos. We team up with bold
            founders and protocol builders to bring their blockchain visions to
            life — from trustless token drops to multi-chain product ecosystems.
          </p>

          <p>
            We blend deep <strong className="text-white">EVM expertise</strong>{" "}
            with strong product thinking, building Web3 systems that are secure,
            scalable, and user-first.
          </p>

          <p>
            Our mission is to shape the future of the decentralized web by
            crafting secure, elegant, and efficient infrastructure — helping the
            best ideas go on-chain, fast and battle-tested.
          </p>
        </div>
        <Image
          src="/logo2.svg"
          width={300}
          height={300}
          alt="logo"
          className="self-end transition-opacity duration-1000 delay-500 ease-in-out mt-[-20px] p-3 bg-black rounded-full"
        />
      </div>
    </div>
  );
}
