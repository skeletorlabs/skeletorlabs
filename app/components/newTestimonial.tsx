import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { shortener } from "../utils/shortener";
import {
  PencilSquareIcon,
  ArrowUpCircleIcon,
  PowerIcon,
} from "@heroicons/react/20/solid";
import { getAvatar } from "../lib/avatar";
import Image from "next/image";
import { TestimonialData, uploadTestimonialToIPFS } from "../lib/ipfs";
import ConnectButton from "./connectButton";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
} from "@reown/appkit/react";
import { store } from "../contracts/testimonialRegistry";
import { BrowserProvider } from "ethers";
import { StateContext } from "../context/state";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function NewTestimonial() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("");
  const { address, isConnected } = useAppKitAccount();
  const { open: walletModalOpen } = useAppKit();
  const { walletProvider } = useAppKitProvider("eip155");
  const {
    testimonialBoxIsOpen,
    setTestimonialBoxIsOpen,
    setRefreshTestimonials,
  } = useContext(StateContext);

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
    if (!!address && name !== "" && role !== "" && message !== "") {
      setLoading(true);

      // Upload to pinata
      const testimonial: TestimonialData = {
        name: name,
        role: role,
        message: message,
      };

      // Get signer
      const provider = new BrowserProvider(walletProvider as any);
      const signer = await provider.getSigner();

      // Upload to Pinata & Store Hash in contract
      await store(testimonial, signer);

      setRefreshTestimonials(true);
      setLoading(false);
      setTestimonialBoxIsOpen(false);
    }
  }, [
    address,
    name,
    role,
    message,
    walletProvider,
    setLoading,
    setRefreshTestimonials,
    setTestimonialBoxIsOpen,
  ]);

  useEffect(() => {
    if (address) {
      const src = getAvatar(address);
      setAvatar(src);
    }
  }, [address, setAvatar]);

  return (
    <Transition appear show={testimonialBoxIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-20 ${jakarta.className}`}
        onClose={() => (loading ? () => {} : setTestimonialBoxIsOpen(false))}
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
                  {isConnected ? (
                    <>
                      <PencilSquareIcon width={20} height={20} />
                      Testimonial
                    </>
                  ) : (
                    <>
                      <PowerIcon width={24} height={24} />
                      Connect First
                    </>
                  )}
                </DialogTitle>
                <div className="flex gap-10">
                  <div className="flex flex-col mt-8 w-[400px] h-[450px] gap-4">
                    {isConnected && address ? (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <label className="text-white/70 text-sm">
                              Account:
                            </label>
                            <span className="text-violet-500">
                              {shortener(address, 6)}
                            </span>
                          </div>
                          <button onClick={() => walletModalOpen()}>
                            <Image
                              src={avatar}
                              width={48}
                              height={48}
                              alt="avatar"
                              className="rounded-full border-2 border-violet-300"
                            />
                          </button>
                        </div>

                        {/* <ConnectButton /> */}

                        <div className="flex flex-col gap-1">
                          <label className="text-white/70 text-sm">Name:</label>
                          <div className="flex items-center rounded-lg text-white relative w-full">
                            <input
                              disabled={loading}
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
                              disabled={loading}
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
                              disabled={loading}
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
                          disabled={loading || !address}
                        >
                          <span>{loading ? "LOADING..." : "CONFIRM"}</span>
                          {!loading && (
                            <ArrowUpCircleIcon width={16} height={16} />
                          )}
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full text-center gap-2">
                        <p className="text-xl font-black">
                          Testimonials are stored on blockchain
                        </p>
                        <p className="text-white/70 text-sm pb-10">
                          Your message is saved on IPFS and finally it's hash is
                          stored on Base blockchain through a Smart Contract.
                        </p>
                        <ConnectButton />
                      </div>
                    )}
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
