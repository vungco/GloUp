//public routes
import Home from "../pages/User/Home";
import Product from "../pages/User/Product";
import Cart from "../pages/User/Cart";
import ProductDetails from "../pages/User/ProductDetails";
import Pay from "../pages/User/Pay";
import News from "../pages/User/News";
import Contact from "../pages/User/Contact";
import About from "../pages/User/About";
import Receiver from "../pages/User/Receiver";
import Thankyou from "../pages/User/Thankyou";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Product",
    component: Product,
  },
  {
    path: "/ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/Cart",
    component: Cart,
  },
  {
    path: "/Pay",
    component: Pay,
  },
  {
    path: "/News",
    component: News,
  },
  {
    path: "/Contact",
    component: Contact,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Receiver",
    component: Receiver,
  },
  {
    path: "/Thankyou",
    component: Thankyou,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
