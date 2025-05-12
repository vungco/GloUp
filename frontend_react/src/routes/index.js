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
import Order from "../pages/User/Order";
import OrderDetail from "../pages/User/Order_detail";
import Voucher from "../pages/User/Voucher";
import NFTCartDetail_sell from "../pages/User/Voucher/NFTCartDetail_sell";
import NFTCartDetail_resell from "../pages/User/Voucher/NFTCartDetail_resell";
import Thankyou from "../pages/User/Thankyou";
import AdHome from "../pages/Admin/Home";
import admin from "../components/Layout/Admin";
import User from "../pages/Admin/User";
import Category from "../pages/Admin/Category";
import Supplier from "../pages/Admin/Supplier";
import AdProduct from "../pages/Admin/Product";
import AdReceiver from "../pages/Admin/Receiver";
import AdOrderDetail from "../pages/Admin/Order_detail";
import AdOrder from "../pages/Admin/Order";
import AdVoucher_create from "../pages/Admin/Voucher/create";
import AdVoucher from "../pages/Admin/Voucher";

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
    path: "/Order",
    component: Order,
  },
  {
    path: "/Voucher",
    component: Voucher,
  },
  {
    path: "/Voucher/:tokenId/sell",
    component: NFTCartDetail_sell,
  },
  {
    path: "/Voucher/:tokenId/resell",
    component: NFTCartDetail_resell,
  },
  {
    path: "/OrderDetail/:id",
    component: OrderDetail,
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
  {
    path: "/Admin/Order",
    component: AdOrder,
    layout: admin,
  },
  {
    path: "/Admin/OrderDetail/:id",
    component: AdOrderDetail,
    layout: admin,
  },
  {
    path: "/Admin/Voucher",
    component: AdVoucher,
    layout: admin,
  },
  {
    path: "/Admin/Voucher/create",
    component: AdVoucher_create,
    layout: admin,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
