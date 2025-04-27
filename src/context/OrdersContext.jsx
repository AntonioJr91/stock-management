import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, removeFromStorage, saveToStorage } from "../service/localStorageService";
import { inputValidation } from "../helpers/inputsValidation";
import { ProductsContext } from "./ProductsContext";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {

   const STORE_PRODUCTS = 'produtos';
   const STORE_ORDERS = 'pedidos';

   const [productName, setProductName] = useState('');
   const [amount, setAmount] = useState('');
   const [clientName, setClientName] = useState('');

   const [orderList, setOrderList] = useState(getFromStorage(STORE_ORDERS) || []);

   const [validationErros, setValidationErros] = useState([]);

   const { products, dispatch } = useContext(ProductsContext, getFromStorage(STORE_PRODUCTS) || []);

   useEffect(() => {
      return () => {
         setProductName('');
         setAmount('');
         setClientName('');
      }
   }, []);

   const handleAddNewOrder = (productName, amount, clientName) => {

      if (!inputValidation(setValidationErros, ['Nome', 'Quantidade', 'Cliente'], productName, amount, clientName)) return;

      const product = products.find(product => product.name === productName);

      if (product.amount === 0) {
         alert('Este produto está esgotado.');
         clearInputs();
         return;
      }

      const newOrder = {
         id: Date.now(),
         productName: productName,
         productValue: product.value,
         amount: amount,
         clientName: clientName,
         status: false,
      }

      setOrderList([...orderList, newOrder]);
      saveToStorage(STORE_ORDERS, [...orderList, newOrder])

      const orderUpdateAmountDecremented = updateAmountProduct(products, product.id, amount);

      saveToStorage(STORE_PRODUCTS, [...orderUpdateAmountDecremented]);
      dispatch({ type: 'load', payload: orderUpdateAmountDecremented });

      clearInputs();
   }

   const updateAmountProduct = (products, id, amount) => {
      const currentProduct = products.map(product => {
         if (product.id === id) {
            return { ...product, amount: Math.max(product.amount - Number(amount), 0) }
         }
         return product;
      });
      return currentProduct
   }

   const handleConfirmDeliveryButton = (id) => {
      const updateOrderPending = orderList.map(order => {
         if (order.id === id && order.status === false) {
            return { ...order, status: true }
         };
         return order;
      });
      setOrderList(updateOrderPending);
      saveToStorage(STORE_ORDERS, updateOrderPending);

   }

   const clearInputs = () => {
      setProductName('');
      setAmount('');
      setClientName('');
   }

   const handleClearAllCompletedOrders = () => {
      const compeltedOrders = orderList.filter(order => order.status !== true);
      saveToStorage(STORE_ORDERS, compeltedOrders);
      setOrderList(compeltedOrders);
   }

   return (
      <OrdersContext.Provider value={
         {
            orderList,
            productName,
            amount,
            clientName,
            validationErros,
            setProductName,
            setAmount,
            setClientName,
            handleAddNewOrder,
            handleConfirmDeliveryButton,
            setValidationErros,
            handleClearAllCompletedOrders
         }
      }>
         {children}
      </OrdersContext.Provider>
   );
}