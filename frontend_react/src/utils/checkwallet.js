export const checkwalletInstall = () => {
  if (typeof window.ethereum === "undefined") {
    return false;
  }
  return true;
};
