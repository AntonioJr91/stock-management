export const clearInputs = (...args) => {
   args.forEach(setter => {
      if (typeof setter === 'function') {
         setter('');
      }
   });
}