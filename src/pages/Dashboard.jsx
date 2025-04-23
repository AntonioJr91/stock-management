import React from "react";
import { Link } from "react-router-dom";

const shortcuts = [
  { label: '+ Novo Produto', to: '/produtos' },
  { label: '+ Novo Pedido', to: '/pedidos' },
  { label: 'Ver Pedidos', to: '/litasdepedidos' },
  { label: 'Ver Estoque', to: '/estoque' }
]

export default function Dashboard() {
  return (
    <div className="w-full px-6 py-8 space-y-8 overflow-y-scroll bg-background text-textPrimary">

      {/* Atalhos rápidos */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#7AA2F7]">Atalhos Rápidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {shortcuts.map((item, i) => (
            <button
              key={i}
              className="bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] transition"
            >
              <Link to={item.to}>{item.label}</Link>
            </button>
          ))}
        </div>
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {[
          { label: "Produtos no Estoque", value: "120" },
          { label: "Pedidos Realizados", value: "34" },
          { label: "Pedidos Pendentes", value: "5" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-[#2B2B3B] p-5 rounded-lg border border-[#3A3A50] col-span-2"
          >
            <p className="text-sm text-[#7AA2F7]">{card.label}</p>
            <h3 className="text-2xl font-bold text-[#E0E0E0]">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Últimos pedidos */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#7AA2F7]">Últimos Pedidos</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]"
            >
              <p><span className="text-[#9090A0]">Cliente:</span> João da Silva</p>
              <p><span className="text-[#9090A0]">Produto:</span> Teclado Gamer</p>
              <p><span className="text-[#9090A0]">Status:</span> Em andamento</p>
            </div>
          ))}
        </div>
      </div>

      {/* Estoque crítico */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#7AA2F7]">Estoque Crítico</h2>
        <div className="space-y-2">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]"
            >
              <p><span className="text-[#9090A0]">Produto:</span> Mouse Óptico</p>
              <p><span className="text-[#9090A0]">Quantidade:</span> 2 unidades</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
