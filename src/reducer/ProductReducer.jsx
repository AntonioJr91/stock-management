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

      // case 'updateProductAmount':
         // const updateProductAmount = products.map(product =>
         //    product.id === action.payload.id
         //       ? { ...product, amount: Math.max(product.amount - Number(action.payload.amount), 0) }
         //       : product
         // );


      case 'del':
         const updatedItens = products.filter(item => item.id !== action.payload);
         return updatedItens;

      default: return products;
   }
}