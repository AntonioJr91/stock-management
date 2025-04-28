import { clearInputs } from "./clearInputs";

export const validationProduct = (products, name, setNome, setAmount, setValue) => {

   const exists = products.some(product => product.name === name);

   if (exists) {
      alert('Já existe um produto cadastrado com esse nome.');
      clearInputs(setNome, setAmount, setValue);
      return false;
   }
   return true;
}