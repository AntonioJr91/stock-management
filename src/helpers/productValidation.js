import { clearInputs } from "./clearInputs";

export const validationProduct = (products, name, value, amount, setNome, setAmount, setValue) => {

   const exists = products.some(product => product.name === name);

   if (exists) {
      alert('Já existe um produto cadastrado com esse nome.');
      clearInputs(setNome, setAmount, setValue);
      return false;
   } else if (value <= 0 ) {
      alert('O valor do produto deve ser maior que zero.');
      return false;
   } else if (amount <= 0) {
      alert('A quantidade de produto deve ser maior que zero.');
      return false;
   }
   return true;
}