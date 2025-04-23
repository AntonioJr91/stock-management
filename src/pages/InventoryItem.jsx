import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function InventoryItem() {

  const { products } = useContext(ProductsContext);

  return (
    <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1 overflow-y-scroll">
      {products.map((product, i) => (
        <div
          key={i}
          className="border-b border-[#2D2D44] py-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#7AA2F7]">{product.name}</h3>
            <div className="text-sm text-[#C0C0C0] space-y-1">
              <p>
                <span className="text-[#8888AA]">Preço:</span> R$ {product.value}
              </p>
              <p>
                <span className="text-[#8888AA]">Quantidade em Estoque:</span> {product.amount} unidade{product.amount > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] hover:cursor-pointer transition"
            >
              Editar
            </button>
            <button
              className="text-xs bg-[#3A3A50] text-red-400 px-2 py-1 rounded hover:bg-red-500 hover:text-white hover:cursor-pointer transition"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>


  );
};




