import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList";
import OrdersProvider from "./context/OrdersContext";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E2F] text-[#E0E0E0] font-sans">
      <div className="w-full max-w-7xl h-[90vh] flex rounded-2xl shadow-lg overflow-hidden border border-[#2D2D44]">

        <BrowserRouter>
          <Sidebar />

          <RoutesList>
            <ProductsProvider>
            <OrdersProvider>
              <Dashboard />
            </OrdersProvider>
            </ProductsProvider>
          </RoutesList>

        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
