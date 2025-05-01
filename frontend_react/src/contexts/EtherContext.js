// EthersContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserProvider, InfuraProvider } from "ethers";
import { useAppKitProvider } from "@reown/appkit/react";

const EthersContext = createContext(null);

export const EthersProvider = ({ children }) => {
  const { walletProvider } = useAppKitProvider("eip155");
  const [ethersProvider, setEthersProvider] = useState(null);

  useEffect(() => {
    const initProvider = async () => {
      if (walletProvider) {
        setEthersProvider(new BrowserProvider(walletProvider));
      } else {
        setEthersProvider(
          new InfuraProvider("sepolia", "06aca75c4a694d3dae144c59a602541b")
        );
      }
    };

    initProvider();
  }, [walletProvider]);

  return (
    <EthersContext.Provider value={ethersProvider}>
      {children}
    </EthersContext.Provider>
  );
};

export const useEthersProvider = () => useContext(EthersContext);
