import React from "react";
import { useLocation } from "react-router-dom";
import cartApi from "../../../api/cartApi";
import { useState, useEffect } from "react";
import Pay from "./Pay";
import Loading from "../../../utils/load";
import {
  BrowserProvider,
  JsonRpcProvider,
  Contract,
  InfuraProvider,
} from "ethers";
import { createAppKit, useAppKitProvider } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { arbitrum, sepolia } from "@reown/appkit/networks";
import { VITE_WALLETCONNECT_ID } from "../../../config";

// 1. Get projectId
const projectId = "cdeca023a782de9f15347300de49a66";

// 2. Set the networks
// const networks = [arbitrum, sepolia];

// 3. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sepolia],
  metadata,
  // projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

const CheckInput = () => {
  const { walletProvider, isConnected, account } = useAppKitProvider("eip155");

  const location = useLocation();
  const [carts, setcarts] = useState();

  const { type, data } = location.state || [];

  useEffect(() => {
    // Lấy balance của ví người dùng
    const fetchBalance = async () => {
      // if (!walletProvider || !account) return;
      // alert("chưa kết nối đc ví");
      console.log("walet", walletProvider);
    };

    fetchBalance();
  }, [walletProvider, account]);

  useEffect(() => {
    if (type == "cart") {
      console.log("cart");
      cartApi
        .getBySelectCart({
          cart_ids: data,
        })
        .then((response) => {
          setcarts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (type == "product_detail") {
      setcarts(data);
    }
  }, []);

  return carts ? <Pay getcarts={carts} /> : <Loading />;
};

export default CheckInput;
