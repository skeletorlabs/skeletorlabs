import bs58 from "bs58";
import { BytesLike } from "ethers";

export function ipfsHashToBytes32(ipfsHash: string): BytesLike {
  const bytes = bs58.decode(ipfsHash); // full multihash (typically 34 bytes)
  return "0x" + Buffer.from(bytes.slice(2)).toString("hex"); // slice to remove multihash prefix (0x12 0x20)
}

export function bytes32ToIpfsHash(bytes32Hex: string): string {
  const hex = bytes32Hex.startsWith("0x") ? bytes32Hex.slice(2) : bytes32Hex;

  // Cast the result of Buffer.from to Uint8Array immediately to resolve the type conflict
  const rawHashBuffer: Uint8Array = Buffer.from(
    hex,
    "hex"
  ) as unknown as Uint8Array;

  if (rawHashBuffer.length !== 32) {
    throw new Error("Input bytes32 is not 32 bytes long after decoding.");
  }

  // Cast the result of Buffer.from to Uint8Array immediately
  const multihashPrefix: Uint8Array = Buffer.from([
    0x12, 0x20,
  ]) as unknown as Uint8Array;

  // Buffer.concat expects `ReadonlyArray<Uint8Array>` and returns `Buffer`.
  // The input types for concat should now be clean `Uint8Array`.
  // We still cast the final result of concat to `Uint8Array` for `bs58.encode`.
  const fullMultihashBuffer = Buffer.concat([
    multihashPrefix, // This is now explicitly Uint8Array
    rawHashBuffer, // This is now explicitly Uint8Array
  ]) as unknown as Uint8Array; // Cast the result of concat (which is Buffer) to Uint8Array

  // bs58.encode accepts Uint8Array, Buffer, or Array, so this is compatible at runtime.
  return bs58.encode(fullMultihashBuffer);
}
