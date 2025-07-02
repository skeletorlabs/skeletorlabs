import Loading from "./loading";

export default function LoadingBox() {
  return (
    <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-[100%] h-[100%] bg-black/70 backdrop-blur-sm z-50">
      <Loading />
    </div>
  );
}
