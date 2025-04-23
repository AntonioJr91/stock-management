import { createContext, useRef, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {

   const [products, setProducts] = useState([]);
   const [name, setName] = useState('');
   const [value, setValue] = useState('');
   const [amount, setAmount] = useState('');

   const inputProductNameRef = useRef();

   const handleAddNewProductButton = (name, value, amount) => {
      const product =  {id:Date.now() ,name, amount, value};
      setProducts([...products, product]);
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
            setProducts,
            handleAddNewProductButton,
         }
      }>
         {children}
      </ProductsContext.Provider>
   );
}

