import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { StateContext } from "../context/state";
import LoadingBox from "./loadingBox";
import { CheckBadgeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { sendEmail } from "../lib/sendEmail";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function TalkInBox() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const { talkIsOpen, setTalkIsOpen } = useContext(StateContext);

  enum InputType {
    EMAIL,
    TITLE,
    MESSAGE,
  }

  const onInputChange = useCallback(
    (value: string, type: InputType) => {
      switch (type) {
        case InputType.EMAIL:
          setEmail(value);
          break;
        case InputType.TITLE:
          setTitle(value);
          break;
        case InputType.MESSAGE:
          setMessage(value);
          break;
        default:
          break;
      }
    },
    [setEmail, setTitle, setMessage, InputType]
  );

  const onSubmit = useCallback(async () => {
    setLoading(true);
    const sent = await sendEmail({ email, title, message });
    setEmailSent(sent);
    setLoading(false);
  }, [email, title, message, setLoading, setEmailSent]);

  const clean = useCallback(() => {
    if (!talkIsOpen) {
      onInputChange("", InputType.EMAIL);
      onInputChange("", InputType.TITLE);
      onInputChange("", InputType.MESSAGE);

      const interval = setInterval(() => {
        setEmailSent(false);
        clearInterval(interval);
      }, 300);
    }
  }, [talkIsOpen, onInputChange, InputType]);

  useEffect(() => {
    clean();
  }, [clean]);

  return (
    <Transition appear show={talkIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-50 ${jakarta.className}`}
        onClose={() => (loading ? () => {} : setTalkIsOpen(false))}
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
              <DialogPanel className="w-max transform overflow-hidden rounded-2xl bg-stone-950/80 p-6 pb-4 text-left align-middle transition-all duration-200 border border-white/10 text-white shadow-lg shadow-samurai-red/20 relative">
                {emailSent ? (
                  <div className="w-full h-[300px] xl:w-[450px] xl:h-[450px] flex flex-col items-center justify-center gap-3 text-2xl">
                    <CheckBadgeIcon
                      width={48}
                      height={48}
                      className="text-violet-300"
                    />
                    Thanks for your message
                    <span className="text-sm">We're get in touch soon!</span>
                  </div>
                ) : (
                  <>
                    <DialogTitle className="text-xl flex items-center gap-2">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                          <EnvelopeOpenIcon width={24} height={24} />
                          LET'S TALK
                        </div>
                        <div className="text-sm xl:text-lg text-violet-200">
                          <p>We're happy to begin a conversation with you.</p>
                          {/* <p>Reach us through our socials or send a message.</p> */}
                        </div>
                      </div>
                    </DialogTitle>
                    <div className="flex gap-10">
                      <div className="flex flex-col mt-8 w-[450px] gap-4 py-2">
                        <div className="flex flex-col gap-1">
                          <label className="text-white/70 text-sm">
                            Email:
                          </label>
                          <div className="flex items-center rounded-lg text-white relative w-full">
                            <input
                              disabled={loading}
                              onChange={(e) =>
                                onInputChange(e.target.value, InputType.EMAIL)
                              }
                              value={email}
                              type="text"
                              placeholder="eg. foo@bar.com"
                              className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 font-sans"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-white/70 text-sm">
                            Title:
                          </label>
                          <div className="flex items-center rounded-lg text-white relative w-full">
                            <input
                              disabled={loading}
                              onChange={(e) =>
                                onInputChange(e.target.value, InputType.TITLE)
                              }
                              value={title}
                              type="text"
                              placeholder="eg. Token Launch / Vesting Contracts"
                              className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 font-sans"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-white/70 text-sm">
                            Message:
                          </label>
                          <div className="flex items-center rounded-lg text-white relative w-full">
                            <textarea
                              disabled={loading}
                              onChange={(e) =>
                                onInputChange(e.target.value, InputType.MESSAGE)
                              }
                              value={message}
                              placeholder="Your message"
                              className="w-full bg-white/10 border-transparent py-2 focus:border-transparent focus:ring-transparent outline-none placeholder-white/30 text-md rounded-lg p-2 h-32 font-sans"
                            />
                          </div>
                        </div>

                        <button
                          className={`flex items-center justify-center gap-2 p-2 px-6 bg-violet-300 transition-colors duration-200 hover:bg-violet-200 text-black/80 font-semibold rounded-lg relative ${jakarta.className}`}
                          onClick={onSubmit}
                          disabled={loading}
                        >
                          <span>SEND MESSAGE</span>
                          <EnvelopeIcon
                            className="absolute right-2"
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {loading && <LoadingBox />}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
