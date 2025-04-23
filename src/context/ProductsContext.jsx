import { createContext, useRef, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {

   const [products, setProducts] = useState([]);
   const [name, setName] = useState('');
   const [value, setValue] = useState('');
   const [amount, setAmount] = useState('');

   const inputProductNameRef = useRef();

   const handleAddNewProductButton = async (name, value, amount) => {

      const product =  {name, amount, value}
      console.log(product)

      setProducts([...products, product])

      setName('');
      setValue('')
      setAmount('')
      inputProductNameRef.current?.focus();
   }

   return (
      <ProductsContext.Provider value={
         {
            name,
            value,
            amount,
            products,
            inputProductNameRef,
            setName,
            setValue,
            setAmount,
            handleAddNewProductButton,
         }
      }>
         {children}
      </ProductsContext.Provider>
   );
}

