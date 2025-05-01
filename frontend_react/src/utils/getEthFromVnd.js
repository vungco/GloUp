import axios from "axios";
import { ethers } from "ethers";

export const getEthAmountFromVnd = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=vnd"
    );
    const ethPrice_Vnd = response.data.ethereum.vnd;
    return ethPrice_Vnd;
  } catch (error) {
    console.error("Error fetching ETH price:", error);
    throw error;
  }
};
