// EthersContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserProvider, InfuraProvider, Contract } from "ethers";
import { useAppKitProvider } from "@reown/appkit/react";
import {
  contractOrderAddr,
  contractOrderABI,
} from "../contracts/Order/ContractData";
import {
  contractVoucherAddr,
  contractVoucherABI,
} from "../contracts/Voucher/ContractData";
import {
  contractVoucherAddr_anvil,
  contractVoucherABI_anvil,
} from "../contracts/Voucher/ContractData_anvil";

import {
  contractOrderAddr_anvil,
  contractOrderABI_anvil,
} from "../contracts/Order/ContractDataAnvil";

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {
  const { walletProvider } = useAppKitProvider("eip155");
  const [ethersProvider, setEthersProvider] = useState(null);
  const [contractVoucher, setContractVoucher] = useState(null);
  const [contractOrder, setContractOrder] = useState(null);

  const initProvider = async () => {
    try {
      let etherPro = null;

      if (walletProvider) {
        etherPro = new BrowserProvider(walletProvider);
      } else {
        etherPro = new InfuraProvider(
          "arbitrum-sepolia", // ✅ Tên mạng chính xác
          "06aca75c4a694d3dae144c59a602541b" // 🔑 Project ID của bạn
        );
      }

      setEthersProvider(etherPro);

      const signer = (await etherPro.getSigner()) || null;
      const network = await etherPro.getNetwork();

      const isAnvil = Number(network.chainId) === 31337;

      // Chọn thông tin cho Voucher contract
      const voucherAddress = isAnvil
        ? contractVoucherAddr_anvil
        : contractVoucherAddr;
      const voucherABI = isAnvil
        ? contractVoucherABI_anvil.abi
        : contractVoucherABI;

      const orderAddress = isAnvil
        ? contractOrderAddr_anvil
        : contractOrderAddr;
      const orderABI = isAnvil ? contractOrderABI_anvil.abi : contractOrderABI;

      const voucherContract = new Contract(
        voucherAddress,
        voucherABI,
        signer || etherPro
      );
      setContractVoucher(voucherContract);

      // Order contract luôn dùng cùng ABI + address (nếu không có phiên bản riêng cho anvil)
      const orderContract = new Contract(
        orderAddress,
        orderABI,
        signer || etherPro
      );
      setContractOrder(orderContract);
    } catch (error) {
      console.error("Failed to initialize provider and contracts:", error);
    }
  };

  return (
    <EthersContext.Provider
      value={{
        ethersProvider,
        contractVoucher,
        contractOrder,
        initProvider,
      }}
    >
      {children}
    </EthersContext.Provider>
  );
};

export const useEthersProvider = () => useContext(EthersContext);
