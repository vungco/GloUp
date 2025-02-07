//public routes
import Home from "../pages/User/Home";
import Product from "../pages/User/Product";


const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Product', component: Product
    },

];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};