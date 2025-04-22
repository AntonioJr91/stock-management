import React from "react";

export default function EstoqueItem() {
   return (
      <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1">
         <div className="mb-2 p-1 border-b border-[#2D2D44]">
            <h3 className="text-lg font-semibold text-[#4FD1C5]">Produto Exemplo</h3>

            <div className="text-sm text-[#C0C0C0] space-y-1">
               <p><span className="text-[#8888AA]">Preço:</span> R$ 49,90</p>
               <p><span className="text-[#8888AA]">Quantidade em Estoque:</span> 15 unidades</p>
            </div>
         </div>
      </div>
   );
};