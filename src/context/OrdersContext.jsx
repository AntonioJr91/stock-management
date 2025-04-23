import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
   const [orderList, setOrderList] = useState([]);
   const [productName, setProductName] = useState('');
   const [amount, setAmount] = useState('');
   const [clientName, setClientName] = useState('');
   const [pendingOrders, setPendingOrders] = useState([])

   const inputProductNameRef = useRef();

   const { products, setProducts } = useContext(ProductsContext);

   useEffect(() => {
   }, [products])

   const handleAddNewOrder = (productName, amount, clientName) => {
      const product = products.find(product => product.name === productName);

      if (!product) return;

      const newOrder = {
         id: product.id,
         productName,
         amount,
         clientName,
         status: false,
      }

      setOrderList([...orderList, newOrder]);

      updateAmountProduct(product.id, amount);

      handlePendingOrders()

      setProductName('');
      setAmount('');
      setClientName('');

      inputProductNameRef.current?.focus();
   }

   const updateAmountProduct = (id, amount) => {
      setProducts(prevProducts => {
         const updated = prevProducts.map(product =>
            product.id === id
               ? { ...product, amount: Math.max(product.amount - Number(amount), 0) }
               : product
         );
         return updated;
      });
   }

   const handlePendingOrders = () => {
      const item = orderList.filter(product => product.status === false)
      setPendingOrders([...pendingOrders, item]);
   };

   return (
      <OrdersContext.Provider value={
         {
            orderList,
            productName,
            amount,
            clientName,
            inputProductNameRef,
            pendingOrders,
            setProductName,
            setAmount,
            setClientName,
            handleAddNewOrder
         }
      }>
         {children}
      </OrdersContext.Provider>
   );
}