import { StateContext } from "@/app/context/state";
import { useContext } from "react";
import TalkInBox from "../talkInBox";

export default function Talk() {
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <div className="relative">
      <p className="text-[120px] text-center xl:text-[180px] px-4 xl:px-10 py-16 font-bold leading-tight xl:leading-none">
        <button
          onClick={() => setTalkIsOpen(true)}
          className="transition-all hover:scale-[1.02] hover:text-violet-200"
        >
          LET'S TALK!
        </button>
      </p>
      <TalkInBox />
    </div>
  );
}
