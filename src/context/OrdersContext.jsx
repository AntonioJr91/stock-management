import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
   const [productName, setProductName] = useState('');
   const [amount, setAmount] = useState('');
   const [clientName, setClientName] = useState('');
   const [pendingOrders, setPendingOrders] = useState([]);
   const [orderList, setOrderList] = useState([{ id: 1, productName: "Feijao", amount: 2, productValue: 12.50, clientName: "Jão", status: false }]);
   const [validationErros, setValidationErros] = useState([]);

   const inputProductNameRef = useRef();

   const { products, setProducts } = useContext(ProductsContext);

   useEffect(() => {
   }, [products])

   const handleAddNewOrder = (productName, amount, clientName) => {

      const product = products.find(item => item.name === productName);

      const fieldsName = ['Nome', 'Quantidade', 'Cliente'];
      const fields = [productName, amount, clientName];

      const errors = fields.reduce((acc, field, index) => {
         if (field.trim() === '') {
            acc.push({ field: fieldsName[index], message: `${fieldsName[index]} está vazio.` });
         }
         return acc;
      }, []);

      if (errors.length > 0) {
         setValidationErros(errors);
         return;
      }

      const newOrder = {
         id: product.id,
         productName,
         productValue: product.value,
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
      const item = orderList.filter(product => product.status === false);
      setPendingOrders(item);
   };

   const handleConfirmDeliveryButton = (id) => {
      console.log(id)
   }

   return (
      <OrdersContext.Provider value={
         {
            orderList,
            productName,
            amount,
            clientName,
            inputProductNameRef,
            pendingOrders,
            validationErros,
            setProductName,
            setAmount,
            setClientName,
            handleAddNewOrder,
            handleConfirmDeliveryButton,
            setValidationErros
         }
      }>
         {children}
      </OrdersContext.Provider>
   );
}