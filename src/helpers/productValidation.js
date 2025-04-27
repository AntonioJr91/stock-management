import { clearInputs } from "../context/ProductsContext";

export const validationProduct = (products, name, setNome, setAmount, setValue, inputProductNameRef) => {

   const exists = products.some(product => product.name === name);

   if (exists) {
      alert('Já existe um produto cadastrado com esse nome.');
      clearInputs(setNome, setAmount, setValue, inputProductNameRef);
      return false;
   }
   return true;
}