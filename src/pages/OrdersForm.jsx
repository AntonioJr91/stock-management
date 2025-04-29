import { useContext, useEffect } from "react";
import { OrdersContext } from "../context/OrdersContext";
import { ProductsContext } from "../context/ProductsContext";
import { pressKeyDown } from "../helpers/pressKeyDown";
import { clearInputs } from "../helpers/clearInputs";

export default function OrdersForm() {

  const { products } = useContext(ProductsContext);

  const {
    productName,
    setProductName,
    amount,
    setAmount,
    clientName,
    setClientName,
    handleAddNewOrder,
    validationErros,
    setValidationErros
  } = useContext(OrdersContext);

  const clearError = (fieldName, fieldValue) => {
    if (fieldValue.trim('') !== '') {
      setValidationErros(validationErros.filter(error => error.field !== fieldName))
    }
  }

  useEffect(() => () => clearInputs(setProductName, setAmount, setClientName), []);
  useEffect(() => clearError('Nome', productName), [productName]);
  useEffect(() => clearError('Quantidade', amount), [amount]);
  useEffect(() => clearError('Cliente', clientName), [clientName]);
  useEffect(() => { return () => setValidationErros([]) }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#1E1E2F] p-8 rounded-xl">
      <h2 className="text-xl font-semibold mb-6 text-[#7AA2F7]">Novo Pedido</h2>
      <form className="w-full space-y-4 sm:w-1/2">
        <select
          name="select"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition">
          <option value={''} disabled>Selecione um produto </option>
          {products.map((product, id) => {
            return <option key={id}>{product.name}</option>
          })}
        </select>
        {validationErros.find(el => el.field === 'Nome') &&
          <span className="text-red-500 text-sm block mt-0.5"> Selecione um produto</span>
        }
        <label htmlFor="quantidade" className="block text-sm mb-1 text-[#A0A0B0]">Quantidade</label>
        <input
          type="number"
          id="quantidade"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
        />
        {validationErros.find(el => el.field === 'Quantidade') &&
          <span className="text-red-500 text-sm block mt-0.5">Quantidade está vazio.</span>
        }
        <label htmlFor="cliente" className="block text-sm mb-1 text-[#A0A0B0]">Nome do Cliente</label>
        <input
          type="text"
          id="cliente"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
          onKeyDown={(e) => pressKeyDown(e.code, handleAddNewOrder, productName, amount, clientName)}
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
        />
        {validationErros.find(el => el.field === 'Cliente') &&
          <span className="text-red-500 text-sm block mt-0.5">Nome do cliente está vazio.</span>
        }
        <button
          type="button"
          className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] hover:cursor-pointer active:shadow-sm active:translate-y-0.5 transition duration-150 ease-in-out"
          onClick={() => handleAddNewOrder(productName, amount, clientName)}
        >
          Registrar Pedido
        </button>
      </form>
    </div>
  );
}