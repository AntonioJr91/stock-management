import { useEffect } from "react";

export default function ProductInput({
   name,
   setName,
   inputProductNameRef,
   value,
   setValue,
   amount,
   setAmount,
   handleAddNewProductButton,
   validationErros,
   setValidationErros
}) {

   const clearError = (fieldName, fieldValue) => {
      if (fieldValue.trim('') !== '') {
         setValidationErros(validationErros.filter(error => error.field !== fieldName))
      }
   }

   useEffect(() => clearError('Nome', name), [name]);
   useEffect(() => clearError('Quantidade', amount), [amount]);
   useEffect(() => clearError('Valor', value), [value]);

   return (
      <div className="w-full max-w-xl mx-auto bg-[#1E1E2F] p-8 rounded-xl flex flex-col justify-center">
         <h2 className="text-xl font-semibold mb-6 text-[#7AA2F7]">Cadastrar Produto</h2>
         <form className="space-y-4">
            <div>
               <label className="block text-sm mb-1 text-[#A0A0B0]">Nome do Produto</label>
               <input
                  type="text"
                  name="nome"
                  placeholder="Insira o nome do produto"
                  value={name}
                  ref={inputProductNameRef}
                  className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
                  onChange={e => setName(e.target.value)}
               />
               {validationErros.find(el => el.field === 'Nome') &&
                  <span className="text-red-500 text-sm block mt-0.5">Nome está vazio.</span>
               }
            </div>
            <div>
               <label className="block text-sm mb-1 text-[#A0A0B0]">Preço</label>
               <input
                  type="number"
                  step="0.01"
                  name="preco"
                  placeholder="Insira o valor do pronto ex: (10,99)"
                  value={value}
                  className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
                  onChange={e => setValue(e.target.value)}
               />
               {validationErros.find(el => el.field === 'Valor') &&
                  <span className="text-red-500 text-sm block mt-0.5">Valor está vazio.</span>
               }
            </div>
            <div>
               <label className="block text-sm mb-1 text-[#A0A0B0]">Quantidade</label>
               <input
                  type="number"
                  name="quantidade"
                  placeholder="Insira a quantidade do produto"
                  value={amount}
                  className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
                  onChange={e => setAmount(e.target.value)}
               />
               {validationErros.find(el => el.field === 'Quantidade') &&
                  <span className="text-red-500 text-sm block mt-0.5">Quantidade está vazio.</span>
               }
            </div>
            <button
               type="button"
               className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] transitiom hover:cursor-pointer"
               onClick={() => handleAddNewProductButton(name, value, amount)}
            >
               Cadastrar
            </button>
         </form>
      </div>
   );
}