import { useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductInput from "../components/ProductInput";

export default function ProductsForm() {

 

  const
    {
      name,
      setName,
      inputProductNameRef,
      value,
      setValue,
      amount,
      setAmount,
      handleAddNewProductButton,
      validationErros,
      setValidationErros
    } = useContext(ProductsContext);

  return (
    <ProductInput {...
      {
        name,
        setName,
        inputProductNameRef,
        value,
        setValue,
        amount,
        setAmount,
        handleAddNewProductButton,
        validationErros,
        setValidationErros
      }
    } />
  );
};