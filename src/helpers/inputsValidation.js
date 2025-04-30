export const inputValidation = (setValidationErros, ...args) => {
   const fieldsNames = args[0];
   const fields = args.slice(1);

   if(fieldsNames.length !== fields.length) {
      throw new Error('O número de campos e os nomes não são compativeis.');
   }

   const errors = fields.reduce((acc, field, index) => {
      if (field.trim() === '') {
         acc.push({ field: fieldsNames[index], message: `${fieldsNames[index]} está vazio.` });
      }
      return acc;
   }, []);

   if (errors.length > 0) {
      setValidationErros(errors);
      return false;
   }

   return true;
}