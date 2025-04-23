import { createContext, useRef, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {

   const [products, setProducts] = useState([{id: 1, name:'Teste', value: 20, amount: 10}]);
   const [name, setName] = useState('');
   const [value, setValue] = useState('');
   const [amount, setAmount] = useState('');

   const inputProductNameRef = useRef();

   const handleAddNewProductButton = (name, value, amount) => {
      const product = { id: Date.now(), name, amount, value };
      setProducts([...products, product]);
      setName('');
      setValue('')
      setAmount('')
      inputProductNameRef.current?.focus();
   }

   const handleDeleteProductButton = (id) => {
      const updated = products.filter(product => product.id !== id);
      setProducts(updated);
   }

   const handEditProductButton = (id) => {
      console.log(id)
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
            handleDeleteProductButton,
            handEditProductButton,
         }
      }>
         {children}
      </ProductsContext.Provider>
   );
}

