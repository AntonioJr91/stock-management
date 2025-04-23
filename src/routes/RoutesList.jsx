import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProductsForm from "../pages/ProductsForm";
import OrdersForm from "../pages/OrdersForm";
import InventoryItem from "../pages/InventoryItem";

export const RoutesList = () => {
   return(
      useRoutes([
         {path: '/', element: <Dashboard/>},
         {path: '/produtos', element: <ProductsForm/>},
         {path: '/pedidos', element: <OrdersForm/>},
         {path: '/estoque', element: <InventoryItem/>}
      ])
   );
}