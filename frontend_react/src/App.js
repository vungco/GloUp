import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import User from "./components/Layout/User";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { EthersProvider } from "./contexts/EtherContext";

//  import Appkit
import { createAppKit } from "@reown/appkit/react";
import { sepolia } from "@reown/appkit/networks";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { METAMASK_WCONNECT_ID } from "./config";

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sepolia],
  metadata: {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  },
  projectId: METAMASK_WCONNECT_ID,
  features: {
    analytics: false,
  },
});
//  ket thuc cau hinh

function App() {
  return (
    <EthersProvider>
      <CartProvider>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = User;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </CartProvider>
    </EthersProvider>
  );
}
export default App;
