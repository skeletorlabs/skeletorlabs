// import Notification from "../components/notificate";
// import { ErrorDecoder, DecodedError } from "ethers-decode-error";
// import { TESTIMONIAL_REGISTRY_ABI } from "../contracts/abis";

// type ErrorProps = {
//   e: any;
//   notificate?: boolean;
// };

// const knownReverts: Record<string, string> = {
//   "Invalid id": "This testimonial doesn't exist or is inactive.",
//   "Already stored": "This testimonial has already been stored.",
//   "Invalid hash": "Something went wrong with your testimonial content.",
//   "Not allowed": "You don’t have permission to perform this action.",
//   "Already liked": "You already liked this testimonial.",
// };

// export default async function handleError({
//   e,
//   notificate = false,
// }: ErrorProps) {
//   let error = e.message;

//   let title: string = "Transaction failure";

//   if (e?.code?.toString() === "ACTION_REJECTED" && notificate) {
//     error = "Action dismissed by user";
//   }

//   if (e?.code === "INSUFFICIENT_FUNDS" && notificate) {
//     error = "Insufficient funds";
//   }

//   if (e?.message.includes("Pausable: paused")) {
//     error = "Minting is paused";
//   }

//   // if (e?.errorName === "ITestimonial__Error" && e?.args?.[0]) {
//   //   const reason = e.args[0];
//   //   if (knownReverts[reason]) {
//   //     error = knownReverts[reason];
//   //   }
//   // }

//   const errorDecoder = ErrorDecoder.create([TESTIMONIAL_REGISTRY_ABI]);
//   const decodedError: DecodedError = await errorDecoder.decode(error);

//   console.log(decodedError);

//   if (notificate) {
//     Notification({
//       type: "error",
//       title: title,
//       message: error as string,
//       link: "",
//     });
//   }

//   return e?.code?.toString();
// }

import Notification from "../components/notificate";
import { ErrorDecoder } from "ethers-decode-error";
import { TESTIMONIAL_REGISTRY_ABI } from "../contracts/abis";

type ErrorProps = {
  e: Error;
  notificate?: boolean;
};

export default async function handleDecodedError({
  e,
  notificate = false,
}: ErrorProps) {
  let title: string = "Transaction failure";

  const errorDecoder = ErrorDecoder.create([TESTIMONIAL_REGISTRY_ABI]);

  const { reason, type, args, fragment } = await errorDecoder.decode(e);
  const message = args[0];

  if (notificate) {
    Notification({
      type: "error",
      title: title,
      message: message || reason,
      link: "",
    });
  }

  return e;
}
