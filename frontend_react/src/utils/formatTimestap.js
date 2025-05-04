export const formatBlockchainTimestamp = (tsBN) => {
  const ts =
    typeof tsBN.toNumber === "function" ? tsBN.toNumber() : Number(tsBN); // hỗ trợ BigNumber & BigInt
  return new Date(ts * 1000).toLocaleString(); // hoặc dùng dayjs nếu muốn
};
