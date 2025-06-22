import blockies from "ethereum-blockies-base64";

export function getAvatar(address: string) {
  const avatar = blockies(address.toLowerCase());

  return avatar;
}
