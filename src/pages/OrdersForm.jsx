import { useContext } from "react";
import { OrdersContext } from "../context/OrdersContext";
import { ProductsContext } from "../context/ProductsContext";
import OrderInput from "../components/OrderInput";

export default function OrdersForm() {

  const { products } = useContext(ProductsContext);
  const {
    productName,
    setProductName,
    amount,
    setAmount,
    clientName,
    setClientName,
    handleAddNewOrder,
    validationErros,
    setValidationErros
  } = useContext(OrdersContext);


  return (
    <OrderInput {...
      {
        products,
        productName,
        setProductName,
        amount,
        setAmount,
        clientName,
        setClientName,
        handleAddNewOrder,
        validationErros,
        setValidationErros
      }} />
  );
}