import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import EditProductModal from "../components/EditProductModal";

export default function InventoryList() {

  const { products,
    dispatch,
    handleDeleteProductButton,
    handEditProductButton,
    isOpen,
    setIsOpen,
    currentProductEditId,
  } = useContext(ProductsContext);

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (

    isOpen ? <EditProductModal
      closeModal={handleCloseModal}
      products={products}
      dispatch={dispatch}
      productId={currentProductEditId}
    /> :
      <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1 overflow-y-scroll">
        {products.map(product => (
          <div
            key={product.id}
            className="border-b border-[#2D2D44] py-3 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#7AA2F7]">{product.name}</h3>
              <div className="text-sm text-[#C0C0C0] space-y-1">
                <p>
                  <span className="text-[#8888AA]">Preço: </span>R${product.value}
                </p>
                <p>
                  <span className="text-[#8888AA]">Quantidade em Estoque: </span> <span className={`${product.amount <= 10 ? 'text-red-500' : ''}`}>{product.amount} unidade{product.amount > 1 ? 's' : ''}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] hover:cursor-pointer transition"
                onClick={() => handEditProductButton(product.id)}
              >
                Editar
              </button>
              <button
                className="text-xs bg-[#3A3A50] text-red-400 px-2 py-1 rounded hover:bg-red-500 hover:text-white hover:cursor-pointer transition"
                onClick={() => handleDeleteProductButton(product.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>


  );
};




