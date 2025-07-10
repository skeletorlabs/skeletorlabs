import Notificate from "@/app/components/notificate";
import { LINKS } from "./conts";
import { hederaTestnet } from "@reown/appkit/networks";

export async function notificateTx(tx: any, network: any) {
  const chainId = Number(network?.chainId);
  const complement = chainId === hederaTestnet.id ? "/transaction/" : "/tx/";
  const txUrl = LINKS[chainId] + complement + tx.hash.toString();

  Notificate({
    type: "",
    title: "Transaction Submitted",
    message: `Transaction successfully submitted.`,
    link: txUrl,
  });

  const txReceipt = await tx.wait(6);

  Notificate({
    type: "success",
    title: "Transaction Confirmed",
    message: `Transaction confirmed in block: ${txReceipt.blockNumber}.`,
    link: txUrl,
  });
}
