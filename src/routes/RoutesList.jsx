import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProdutosForm from "../pages/ProdutosForm";
import PedidosForm from "../pages/PedidosForm";
import EstoqueItem from "../pages/EstoqueItem";

export const RoutesList = () => {
   return(
      useRoutes([
         {path: '/', element: <Dashboard/>},
         {path: '/produtos', element: <ProdutosForm/>},
         {path: '/pedidos', element: <PedidosForm/>},
         {path: '/estoque', element: <EstoqueItem/>}
      ])
   );
}