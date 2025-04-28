export default function ProductReducer(products, action) {
   switch (action.type) {

      case 'load':
         return action.payload;

      case 'add':
         const newProduct = {
            id: action.payload.id,
            name: action.payload.name,
            value: action.payload.value,
            amount: action.payload.amount
         }
         const updatedProducts = [...products, newProduct];
         return updatedProducts

      case 'update':
         const updateProducts = products.map(product => {
            if (product.id === action.payload.id) {
               return {
                  ...product,
                  name: action.payload.name,
                  value: action.payload.value,
                  amount: action.payload.amount
               }
            }
            return product
         })
         return updateProducts

      case 'updateAmountProduct':
         const currentProduct = products.map(product => {
            if (product.id === action.payload.id) {
               return { ...product, amount: Math.max(product.amount - Number(action.payload.amount), 0) }
            }
            return product;
         });
         return currentProduct

      case 'del':
         return products.filter(product => product.id !== action.payload);

      default: return products;
   }
}