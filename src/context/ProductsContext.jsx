import { createContext, useRef, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {

   const [name, setName] = useState('');
   const [value, setValue] = useState('');
   const [amount, setAmount] = useState('');
   const [products, setProducts] = useState([{ id: 1, name: 'Teste', value: 20, amount: 10 }]);
   const [validationErros, setValidationErros]= useState([]);

   const inputProductNameRef = useRef();

   const handleAddNewProductButton = (name, value, amount) => {

      const fieldsName = ['Nome', 'Valor', 'Quantidade'];
      const fields = [name, value, amount];
      
      const errors = fields.reduce((acc, field, index) => {
         if (field.trim() === '') {
            acc.push({field:fieldsName[index], message: `${fieldsName[index]} está vazio.`});
         }
         return acc;
      }, []);

      if(errors.length > 0) {
         setValidationErros(errors);
         return;
      }

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
            validationErros,
            setName,
            setValue,
            setAmount,
            setProducts,
            handleAddNewProductButton,
            handleDeleteProductButton,
            handEditProductButton,
            setValidationErros,
         }
      }>
         {children}
      </ProductsContext.Provider>
   );
}

