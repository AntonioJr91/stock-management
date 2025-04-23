import { useContext } from "react";
import { OrdersContext } from "../context/OrdersContext";
import { ProductsContext } from "../context/ProductsContext";

export default function OrdersForm() {

  const { productName, setProductName, amount, setAmount, clientName, setClientName, handleAddNewOrder, inputProductNameRef } = useContext(OrdersContext);
  const { products } = useContext(ProductsContext);

  return (
    <div className="w-full max-w-xl mx-auto bg-[#1E1E2F] p-8 rounded-xl flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-6 text-[#7AA2F7]">Novo Pedido</h2>
      <form className="space-y-4">
        <div>
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
        </div>

        <div>
          <label htmlFor="quantidade" className="block text-sm mb-1 text-[#A0A0B0]">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
          />
        </div>

        <div>
          <label htmlFor="cliente" className="block text-sm mb-1 text-[#A0A0B0]">Nome do Cliente</label>
          <input
            type="text"
            id="cliente"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
          />
        </div>

        <button
          type="button"
          onClick={() => handleAddNewOrder(productName, amount, clientName)}
          className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] transitiom hover:cursor-pointer"
        >
          Registrar Pedido
        </button>
      </form>
    </div>
  );
}