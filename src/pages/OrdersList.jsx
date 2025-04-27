import React, { useContext, useState } from "react";
import { OrdersContext } from "../context/OrdersContext";

export default function OrdersList() {

  const { orderList, handleConfirmDeliveryButton, handleClearAllCompletedOrders } = useContext(OrdersContext);
  const [completedOrders, setCompletedOrders] = useState(false);

  const filteredOrders = orderList.filter(order => order.status === completedOrders);

  return (
    <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1 overflow-y-scroll">
      <div className="flex justify-center gap-6 mb-6 h-auto">
        <span
          className={`px-6 py-4 rounded-lg shadow-md text-center cursor-pointer transition 
                ${completedOrders === true ? 'bg-[#3A3A50]' : 'bg-[#2D2D44] hover:bg-[#3A3A50]'}`}
          onClick={() => setCompletedOrders(true)}
        >
          Lista de pedidos concluídos
        </span>

        <span
          className={`px-6 py-4 rounded-lg shadow-md text-center cursor-pointer transition 
                ${completedOrders === false ? 'bg-[#3A3A50]' : 'bg-[#2D2D44] hover:bg-[#3A3A50]'}`}
          onClick={() => setCompletedOrders(false)}
        >
          Lista de pedidos pendentes
        </span>
      </div>

        <span
          onClick={handleClearAllCompletedOrders}
          className={`text-end text-sm opacity-70 hover:cursor-pointer hover:text-red-500 hover:opacity-100 hover:underline ${completedOrders? 'block' : 'hidden'} }`}>Limpar todos os pedidos concluidos</span>

      {filteredOrders.filter(order => order.status === completedOrders).map(order => (
        <>

          <div key={order.id}
            className={`border-b border-[#2D2D44] py-3 flex items-center justify-between ${order.status ? 'opacity-100' : ''}`}>

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
                  <span className="text-[#8888AA]">Valot total: </span> R$ {(order.productValue * order.amount).toFixed(2)}
                </p>
                <p>
                  <span className={`${order.status ? "text-green-500" : "text-red-500"}`}>Status: {order.status ? 'Concluido' : 'Pendente'}</span>
                </p>
              </div>
            </div>
            {!order.status &&
              <div className="flex items-center gap-2">
                <button
                  disabled={order.status ? true : false}
                  className={`text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] transition ${order.status ? 'hidden' : 'hover:cursor-pointer'}`}
                  onClick={() => handleConfirmDeliveryButton(order.id)}
                >
                  Confirmar entrega
                </button>
              </div>
            }
          </div>
        </>
      ))}
    </div>


  );
};




// {orderList.map(order => (
//   <div key={order.id}
//     className={`border-b border-[#2D2D44] py-3 flex items-center justify-between ${order.status ? 'opacity-100' : ''}`}>
//     <div>
//       <h3 className="text-lg font-semibold text-[#7AA2F7]">{order.clientName}</h3>
//       <div className="text-sm text-[#C0C0C0] space-y-1">
//         <p>
//           <span className="text-[#8888AA]">Produto: </span>{order.productName}
//         </p>
//         <p>
//           <span className="text-[#8888AA]">Quantidade do pedido: </span> {order.amount} unidade{order.amount > 1 ? 's' : ''}
//         </p>
//         <p>
//           <span className="text-[#8888AA]">Valot total: </span> R$ {(order.productValue * order.amount).toFixed(2)}
//         </p>
//         <p>
//           <span className={`${order.status ? "text-green-500" : "text-red-500"}`}>Status: {order.status ? 'Concluido' : 'Pendente'}</span>
//         </p>
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <button
//         disabled={order.status ? true : false}
//         className={`text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] transition ${order.status ? 'hidden' : 'hover:cursor-pointer'}`}
//         onClick={() => handleConfirmDeliveryButton(order.id)}
//       >
//         Confirmar entrega
//       </button>
//     </div>
//   </div>
// ))}