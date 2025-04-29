import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersContext } from "../context/OrdersContext";
import { ProductsContext } from "../context/ProductsContext";

const shortcuts = [
  { label: '+ Novo Produto', to: '/products' },
  { label: '+ Novo Pedido', to: '/orders' },
  { label: 'Ver Pedidos', to: '/orderlist' },
  { label: 'Ver Estoque', to: '/stock' }
]

export default function Dashboard() {

  const { orderList } = useContext(OrdersContext);
  const { products } = useContext(ProductsContext);

  return (
    <div className="w-full h-screen px-6 py-8 space-y-8 overflow-y-scroll bg-background text-textPrimary">

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4">
        {[
          { label: "Produtos no Estoque", value: products.length },
          { label: "Pedidos Realizados", value: orderList.length },
          { label: "Pedidos Pendentes", value: orderList.filter(orderPeding => orderPeding.status === false).length },
          { label: "Pedidos Concluídos", value: orderList.filter(orderPeding => orderPeding.status === true).length },
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

        {!orderList.length && <div className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]">
          <p className="text-[#9090A0]">Nenhum pedido.</p>
        </div>}

        <div className="space-y-2">
          {orderList.slice(-3).map((order, i) => (
            <div
              key={i}
              className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]"
            >
              <p><span className="text-[#9090A0]">Cliente: </span>{order.clientName}</p>
              <p><span className="text-[#9090A0]">Produto: </span>{order.productName}</p>
              <p className={`${order.status ? 'text-green-500' : 'text-red-500'}`}><span className="text-[#9090A0]">Status: </span>{order.status ? 'Concluído' : 'Pendente'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Estoque crítico */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#7AA2F7]">Estoque Crítico</h2>
        <div className="space-y-2">
          {products.filter(product => product.amount < 10).length > 0 ? (
            products
              .filter(product => product.amount < 10)
              .map((product, i) => (
                <div
                  key={i}
                  className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]"
                >
                  <p><span className="text-[#9090A0]">Produto:</span> {product.name}</p>
                  <p className="text-red-500"><span className="text-[#9090A0]">Quantidade:</span> {product.amount}</p>
                </div>
              ))
          ) : (
            <div className="bg-[#2B2B3B] p-4 rounded-md border border-[#3A3A50] text-sm text-[#C0C0D0]">
              <p className="text-[#9090A0]">Todos os estoques estão abastecidos.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
