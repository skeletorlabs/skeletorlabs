import Image from "next/image";

interface Loading {
  css?: string;
}

export default function Loading({ css }: Loading) {
  return (
    <div className={`flex justify-center items-center w-full ${css}`}>
      <Image
        src={"/loading-v3.svg"}
        width={44}
        height={44}
        alt="Loading"
        className="animate-pulse"
      />
    </div>
  );
}
