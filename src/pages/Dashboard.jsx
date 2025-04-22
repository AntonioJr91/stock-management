import React from "react";

export default function Dashboard() {

  return (
    <div className="w-full px-6 py-8 space-y-8 overflow-y-scroll">

      {/* Atalhos rápidos */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#4FD1C5]">Atalhos Rápidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-[#4FD1C5] text-[#1E1E2F] font-medium py-2 rounded-md hover:opacity-90 transition">
            <a href='#'>+ Novo Produto</a>
          </button>
          <button className="bg-[#4FD1C5] text-[#1E1E2F] font-medium py-2 rounded-md hover:opacity-90 transition">
            <a href='#'>+ Novo Pedido</a>
          </button>
          <button className="bg-[#4FD1C5] text-[#1E1E2F] font-medium py-2 rounded-md hover:opacity-90 transition">
            Ver Pedidos
          </button>
          <button className="bg-[#4FD1C5] text-[#1E1E2F] font-medium py-2 rounded-md hover:opacity-90 transition">
            <a href='#'>Ver Estoque</a>
          </button>
        </div>
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1E1E2F] p-5 rounded-lg border border-[#2D2D44]">
          <p className="text-sm text-[#A0A0B0]">Produtos no Estoque</p>
          <h3 className="text-2xl font-bold text-[#4FD1C5]">120</h3>
        </div>
        <div className="bg-[#1E1E2F] p-5 rounded-lg border border-[#2D2D44]">
          <p className="text-sm text-[#A0A0B0]">Pedidos Realizados</p>
          <h3 className="text-2xl font-bold text-[#4FD1C5]">34</h3>
        </div>
        <div className="bg-[#1E1E2F] p-5 rounded-lg border border-[#2D2D44]">
          <p className="text-sm text-[#A0A0B0]">Pedidos Pendentes</p>
          <h3 className="text-2xl font-bold text-[#4FD1C5]">5</h3>
        </div>
        <div className="bg-[#1E1E2F] p-5 rounded-lg border border-[#2D2D44]">
          <p className="text-sm text-[#A0A0B0]">Clientes Atendidos</p>
          <h3 className="text-2xl font-bold text-[#4FD1C5]">21</h3>
        </div>
      </div>

      {/* Últimos pedidos */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#4FD1C5]">Últimos Pedidos</h2>
        <div className="space-y-2">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#1E1E2F] p-4 rounded-md border border-[#2D2D44] text-sm text-[#C0C0C0]">
              <p><span className="text-[#8888AA]">Cliente:</span> João da Silva</p>
              <p><span className="text-[#8888AA]">Produto:</span> Teclado Gamer</p>
              <p><span className="text-[#8888AA]">Status:</span> Em andamento</p>
            </div>
          ))}
        </div>
      </div>

      {/* Estoque crítico */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#4FD1C5]">Estoque Crítico</h2>
        <div className="space-y-2">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-[#1E1E2F] p-4 rounded-md border border-[#2D2D44] text-sm text-[#C0C0C0]">
              <p><span className="text-[#8888AA]">Produto:</span> Mouse Óptico</p>
              <p><span className="text-[#8888AA]">Quantidade:</span> 2 unidades</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};