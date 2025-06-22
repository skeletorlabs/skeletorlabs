import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { shortener } from "../utils/shortener";
import { PencilSquareIcon, ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { getAvatar } from "../lib/avatar";
import Image from "next/image";
import { TestimonialData, uploadTestimonialToIPFS } from "../lib/ipfs";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export type TestimonialProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Testimonial({ open, setOpen }: TestimonialProps) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("");

  const account = "0x6Fef7E05DDD63B5747d7DAb2f4F6C4014CDC52bf";

  enum InputType {
    NAME,
    ROLE,
    MESSAGE,
  }

  const onInputChange = (value: string, type: InputType) => {
    switch (type) {
      case InputType.NAME:
        setName(value);
        break;
      case InputType.ROLE:
        setRole(value);
        break;
      case InputType.MESSAGE:
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = useCallback(async () => {
    if (!!account && name !== "" && role !== "" && message !== "") {
      setLoading(true);

      // Upload to pinata
      const testimonial: TestimonialData = {
        address: account,
        name: name,
        role: role,
        message: message,
      };
      const cid = await uploadTestimonialToIPFS(testimonial);
      console.log(cid);
      // Store Hash in contract

      setLoading(false);
    }
  }, [account, name, role, message, setLoading]);

  useEffect(() => {
    const src = getAvatar(account);
    setAvatar(src);
  }, [account, setAvatar]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-20 ${jakarta.className}`}
        onClose={() => (loading ? () => {} : setOpen(false))}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-max transform overflow-hidden rounded-2xl bg-stone-950/80 p-6 text-left align-middle transition-all border border-white/10 text-white shadow-lg shadow-samurai-red/20">
                <DialogTitle className="text-xl flex items-center gap-2">
                  <PencilSquareIcon width={20} height={20} />
                  Testimonial
                </DialogTitle>
                <div className="flex gap-10">
                  <div className="flex flex-col mt-8 w-[400px] gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <label className="text-white/70 text-sm">
                          Account:
                        </label>
                        <span className="text-violet-500">
                          {shortener(account, 6)}
                        </span>
                      </div>
                      <Image
                        src={avatar}
                        width={48}
                        height={48}
                        alt="avatar"
                        className="rounded-full border-2 border-violet-300"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-white/70 text-sm">Name:</label>
                      <div className="flex items-center rounded-lg text-white relative w-full">
                        <input
                          onChange={(e) =>
                            onInputChange(e.target.value, InputType.NAME)
                          }
                          value={name}
                          type="text"
                          placeholder="John Due"
                          className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-white/70 text-sm">Role:</label>
                      <div className="flex items-center rounded-lg text-white relative w-full">
                        <input
                          onChange={(e) =>
                            onInputChange(e.target.value, InputType.ROLE)
                          }
                          value={role}
                          type="text"
                          placeholder="Samurai CEO"
                          className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-white/70 text-sm">
                        Testimonial Message:
                      </label>
                      <div className="flex items-center rounded-lg text-white relative w-full">
                        <textarea
                          onChange={(e) =>
                            onInputChange(e.target.value, InputType.MESSAGE)
                          }
                          value={message}
                          placeholder={`Loren Ipsum \nDolor sit\nAmet`}
                          className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 h-32 font-sans"
                        />
                      </div>
                    </div>

                    <button
                      className={`flex items-center justify-center gap-2 py-3 text-xs mt-5 bg-violet-300 transition-colors enabled:hover:bg-violet-100 disabled:opacity-60 text-black font-bold rounded-lg ${jakarta.className}`}
                      onClick={onSubmit}
                      disabled={loading || !account}
                    >
                      <span>{loading ? "LOADING..." : "CONFIRM"}</span>
                      {!loading && <ArrowUpCircleIcon width={16} height={16} />}
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
