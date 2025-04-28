import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getFromStorage, saveToStorage } from "../service/localStorageService";
import OrderReducer from "../reducer/OrderReducer";
import { inputValidation } from "../helpers/inputsValidation";
import { ProductsContext } from "./ProductsContext";
import { clearInputs } from "../helpers/clearInputs";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {

   const STORE_PRODUCTS = 'produtos';
   const STORE_ORDERS = 'pedidos';

   const [productName, setProductName] = useState('');
   const [amount, setAmount] = useState('');
   const [clientName, setClientName] = useState('');
   const [validationErros, setValidationErros] = useState([]);

   const [orderList, dispatchOrder] = useReducer(OrderReducer, getFromStorage(STORE_ORDERS) || []);
   const { products, dispatch } = useContext(ProductsContext, getFromStorage(STORE_PRODUCTS) || []);

   useEffect(() => {
      saveToStorage(STORE_ORDERS, orderList);
   }, [orderList]);

   const handleAddNewOrder = (productName, amount, clientName) => {

      try {
         if (!inputValidation(setValidationErros, ['Nome', 'Quantidade', 'Cliente'], productName, amount, clientName)) return;

         const product = products.find(product => product.name === productName);

         if (product.amount === 0) {
            alert('Este produto está esgotado.');
            clearInputs();
            return;
         }

         const newOrder = {
            id: Date.now(),
            productName,
            productValue: product.value,
            amount,
            clientName,
            status: false,
         }

         dispatchOrder({ type: 'add', payload: newOrder });
         updateAmountProduct(products, product.id, amount);
         clearInputs(setProductName, setAmount, setClientName);
      } catch (error) {
         console.log(error);
      }
   }

   const updateAmountProduct = (products, id, amount) => {
      //dispatch do produto
      dispatch({ type: 'updateAmountProduct', payload: { products: products, id, amount } });
   }

   const handleConfirmDeliveryButton = (id) => {
      dispatchOrder({ type: 'updateOrderPending', payload: id });
   }

   const handleClearAllCompletedOrders = () => {
      dispatchOrder({ type: 'clearAllCompletedOrders' });
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