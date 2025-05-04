// EthersContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserProvider, InfuraProvider, Contract } from "ethers";
import { useAppKitProvider } from "@reown/appkit/react";
import { contractAddr, contractABI } from "../contracts/Order/ContractData";

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {
  const { walletProvider } = useAppKitProvider("eip155");
  const [ethersProvider, setEthersProvider] = useState(null);
  const [contract, setcontract] = useState(null);

  const initProvider = async () => {
    try {
      let etherPro = null;
      let getcontract = null;
      if (walletProvider) {
        etherPro = new BrowserProvider(walletProvider);

        setEthersProvider(etherPro);
      } else {
        setEthersProvider(
          new InfuraProvider("sepolia", "06aca75c4a694d3dae144c59a602541b")
        );
      }
      const signer = (await etherPro.getSigner()) || null;
      if (signer) {
        getcontract = new Contract(contractAddr, contractABI, signer);
      } else {
        getcontract = new Contract(contractAddr, contractABI, etherPro);
      }
      setcontract(getcontract);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EthersContext.Provider value={{ ethersProvider, contract, initProvider }}>
      {children}
    </EthersContext.Provider>
  );
};

export const useEthersProvider = () => useContext(EthersContext);
