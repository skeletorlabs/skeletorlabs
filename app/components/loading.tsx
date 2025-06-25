import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full">
      <Image
        src={"/loading.svg"}
        width={44}
        height={44}
        alt="Loading"
        className="animate-pulse"
      />
    </div>
  );
}
