import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList";
import OrdersProvider from "./context/OrdersContext";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
  return (
    <div className="flex bg-[#1E1E2F] text-[#E0E0E0] font-sans">
        <BrowserRouter>
          <Sidebar />

          <ProductsProvider>
            <OrdersProvider>


              <RoutesList>
                <Dashboard  />
              </RoutesList>

            </OrdersProvider>
          </ProductsProvider>
        </BrowserRouter>
      </div>
  );
};

export default App;
