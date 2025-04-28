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
import AdHome from "../pages/Admin/Home";
import admin from "../components/Layout/Admin";
import User from "../pages/Admin/User";
import Category from "../pages/Admin/Category";
import Supplier from "../pages/Admin/Supplier";
import AdProduct from "../pages/Admin/Product";
import AdReceiver from "../pages/Admin/Receiver";

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
    path: "/ProductDetail/:id",
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
  {
    path: "/Admin/Home",
    component: AdHome,
    layout: admin,
  },
  {
    path: "/Admin/User",
    component: User,
    layout: admin,
  },
  {
    path: "/Admin/Category",
    component: Category,
    layout: admin,
  },
  {
    path: "/Admin/Supplier",
    component: Supplier,
    layout: admin,
  },
  {
    path: "/Admin/Product",
    component: AdProduct,
    layout: admin,
  },
  {
    path: "/Admin/Receiver",
    component: AdReceiver,
    layout: admin,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
