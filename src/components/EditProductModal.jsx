import { useEffect, useState } from "react";
import { pressKeyDown } from "../helpers/pressKeyDown";

export default function EditProductModal({ closeModal, products, dispatch, productId }) {

  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const product = products.find(product => product.id === productId);

    if (product) {
      setName(product.name);
      setValue(product.value);
      setAmount(product.amount);
    }
  }, [products, productId]);

  const handleSaveModalButton = () => {
    if (!name || !value || !amount) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    if (isNaN(value) || isNaN(amount)) {
      alert('O valor e a quantidade precisam ser números válidos!');
      return;
    }
    const product = products.find(product => product.id === productId);
    if (!product) {
      alert('Produto não encontrado!');
    }
    
    dispatch({ type: 'update', payload: { id: productId, name, value, amount } });
    closeModal();
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2D2D44] text-[#E0E0E0] rounded-xl p-6 w-full max-w-md shadow-lg border border-[#3A3A50]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#7AA2F7]">Editar Produto</h2>
          <button
            className="text-[#E0E0E0] hover:text-[#FF6B6B] text-lg font-bold hover:cursor-pointer "
            onClick={() => closeModal()}
          >
            &times;
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-[#A0A0C0]">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-[#1E1E2E] text-[#E0E0E0] border border-[#3A3A50] focus:outline-none focus:border-[#7AA2F7]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#A0A0C0]">Quantidade</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full px-3 py-2 rounded-md bg-[#1E1E2E] text-[#E0E0E0] border border-[#3A3A50] focus:outline-none focus:border-[#7AA2F7]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#A0A0C0]">Valor R$</label>
            <input
              type="number"
              step="0.01"
              value={value}
              onChange={(e) => setValue(parseFloat(e.target.value))}
              onKeyDown={(e) => pressKeyDown(e.code, handleSaveModalButton)}
              className="w-full px-3 py-2 rounded-md bg-[#1E1E2E] text-[#E0E0E0] border border-[#3A3A50] focus:outline-none focus:border-[#7AA2F7]"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-[#4C4C6D] hover:bg-[#5A5A88] transition hover:cursor-pointer"
              onClick={() => closeModal()}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-[#3B4B82] text-white hover:bg-[#4B5CA8] transition hover:cursor-pointer"
              onClick={() => handleSaveModalButton()}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
