import { createContext, useEffect, useReducer, useRef, useState } from "react";
import ProductReducer from "../reducer/ProductReducer";

import { inputValidation } from "../helpers/inputsValidation";
import { validationProduct } from "../helpers/productValidation";
import { getFromStorage, saveToStorage } from "../service/localStorageService";
import { clearInputs } from "../helpers/clearInputs";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {

   const STORE_PRODUCTS = 'produtos';

   const [name, setName] = useState('');
   const [value, setValue] = useState('');
   const [amount, setAmount] = useState('');
   const [products, dispatch] = useReducer(ProductReducer, getFromStorage(STORE_PRODUCTS) || []);
   const [validationErros, setValidationErros] = useState([]);

   const [isOpen, setIsOpen] = useState(false);
   const [currentProductEditId, setCurrentProductEditId] = useState(null);

   const inputProductNameRef = useRef();

   useEffect(() => {
      saveToStorage(STORE_PRODUCTS, products);
   }, [products]);

   const handleAddNewProductButton = (name, value, amount) => {

      if (!inputValidation(setValidationErros, ['Nome', 'Valor', 'Quantidade'], name, value, amount)) return;
      
      if (!validationProduct(products, name, Number(value), Number(amount), setName, setValue, setAmount)) return;

      const id = Date.now();
      dispatch({ type: 'add', payload: { id: id, name, value, amount } });

      saveToStorage(STORE_PRODUCTS, [...products, { id, name, value, amount }]);

      clearInputs(setName, setValue, setAmount);
   }

   const handleDeleteProductButton = (id, name) => {
      const confirm = window.confirm(`Deseja remover o produto = [ ${name} ] do estoque? `);
      if (!confirm) return;
      dispatch({ type: 'del', payload: id });
   }

   const handEditProductButton = (id) => {
      setIsOpen(true);
      setCurrentProductEditId(id);
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
            isOpen,
            currentProductEditId,
            setName,
            setValue,
            setAmount,
            dispatch,
            handleAddNewProductButton,
            handleDeleteProductButton,
            handEditProductButton,
            setValidationErros,
            setIsOpen,
            setCurrentProductEditId,
         }
      }>
         {children}
      </ProductsContext.Provider>
   );
}

