import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { pressKeyDown } from "../helpers/pressKeyDown";
import { clearInputs } from "../helpers/clearInputs";

export default function ProductsForm() {



  const
    {
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
    } = useContext(ProductsContext);

  const clearError = (fieldName, fieldValue) => {
    if (fieldValue.trim('') !== '') {
      setValidationErros(validationErros.filter(error => error.field !== fieldName))
    }
  }

  useEffect(() => {
    inputProductNameRef.current?.focus();
    return () => {
      clearInputs(setName, setValue, setAmount);
    }
  }, []);

  useEffect(() => clearError('Nome', name), [name]);
  useEffect(() => clearError('Quantidade', amount), [amount]);
  useEffect(() => clearError('Valor', value), [value]);
  useEffect(() => { return () => setValidationErros([]) }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#1E1E2F] p-8 rounded-xl">
      <h2 className="text-xl font-semibold mb-6 text-[#7AA2F7]">Cadastrar Produto</h2>
      <form className="w-full space-y-4 sm:w-1/2">
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
            onKeyDown={(e) => pressKeyDown(e.code, handleAddNewProductButton, name, value, amount)}
          />
          {validationErros.find(el => el.field === 'Quantidade') &&
            <span className="text-red-500 text-sm block mt-0.5">Quantidade está vazio.</span>
          }
        </div>
        <button
          type="button"
          className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] hover:cursor-pointer active:shadow-sm active:translate-y-0.5 transition duration-150 ease-in-out"
          onClick={() => handleAddNewProductButton(name, value, amount)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};