import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProductsForm from "../pages/ProductsForm";
import OrdersForm from "../pages/OrdersForm";
import ProductList from "../pages/ProductList";
import OrderList from "../pages/OrdersList";

export const RoutesList = () => {
   return(
      useRoutes([
         {path: '/', element: <Dashboard/>},
         {path: '/products', element: <ProductsForm/>},
         {path: '/orders', element: <OrdersForm/>},
         {path: '/orderlist', element: <OrderList/>},
         {path: '/stock', element: <ProductList/>},
      ])
   );
}