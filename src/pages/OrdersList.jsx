import React, { useContext } from "react";
import { OrdersContext } from "../context/OrdersContext";

export default function OrdersList() {

  const { orderList, handleConfirmDeliveryButton } = useContext(OrdersContext);

  return (
    <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1 overflow-y-scroll">
      {orderList.map(order => (
        <div key={order.id}
        className="border-b border-[#2D2D44] py-3 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#7AA2F7]">{order.clientName}</h3>
            <div className="text-sm text-[#C0C0C0] space-y-1">
              <p>
                <span className="text-[#8888AA]">Produto: </span>{order.productName}
              </p>
              <p>
                <span className="text-[#8888AA]">Quantidade do pedido: </span> {order.amount} unidade{order.amount > 1 ? 's' : ''}
              </p>
              <p>
                <span className="text-[#8888AA]">Valot total: </span> R${(order.value * order.amount).toFixed(2)}
              </p>
              <p>
                <span className={`${order.status ? "text-green-500" : "text-red-500"}`}>Status: {order.status ? 'Concluido' : 'Pendente'}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] hover:cursor-pointer transition"
              onClick={() => handleConfirmDeliveryButton(order.id)}
            >
              Confirmar entrega
            </button>
          </div>
        </div>
      ))}
    </div>


  );
};




