import Image from "next/image";

interface Loading {
  css?: string;
}

export default function Loading({ css }: Loading) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 w-full animate-pulse ${css}`}
    >
      <Image src={"/loading-v4.svg"} width={75} height={75} alt="Loading" />
      <span className="text-xs text-violet-300">LOADING</span>
    </div>
  );
}
