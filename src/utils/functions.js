export const getWalletSupports = () => {
  const userAgentString =
    typeof window !== "undefined" ? navigator.userAgent : "";
  if (/iPad|iPhone|iPod/i.test(userAgentString)) {
    return ["metamask", "trust", "coin98"];
  }

  return undefined;
};