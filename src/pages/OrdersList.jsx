import React, { useContext, useState } from "react";
import { OrdersContext } from "../context/OrdersContext";

export default function OrdersList() {
  const { orderList, handleConfirmDeliveryButton, handleClearAllCompletedOrders } = useContext(OrdersContext);

  const [completedOrders, setCompletedOrders] = useState(false);
  const filteredOrders = orderList.filter(order => order.status === completedOrders);
  const completedOrdersExist = orderList.some(order => order.status === true);

  return (
    <div className="w-full bg-[#1E1E2F] rounded-lg p-6 shadow-sm mb-4 flex flex-col gap-1 overflow-y-scroll">

      {/* Checando se há algum pedido */}
      {orderList.length === 0 ?

        //Se não houver pedidos ele exibe essa msg.
        (
          <span className="text-center text-xl text-[#7AA2F7]">Não há pedidos no momento!</span>
        )
        :
        //Se tiver, ele exibe os 2 compoentes (lista de pedidos concluidos e pendentes)
        (
          <>
            <div className="flex justify-center gap-6 mb-6 h-auto">
              <span
                className={`px-6 py-4 rounded-lg shadow-md text-center cursor-pointer transition ${completedOrders ? 'bg-[#3A3A50]' : 'bg-[#2D2D44] hover:bg-[#3A3A50]'}`}
                onClick={() => setCompletedOrders(true)}
              >
                Lista de pedidos concluídos
              </span>

              <span
                className={`px-6 py-4 rounded-lg shadow-md text-center cursor-pointer transition ${!completedOrders ? 'bg-[#3A3A50]' : 'bg-[#2D2D44] hover:bg-[#3A3A50]'}`}
                onClick={() => setCompletedOrders(false)}
              >
                Lista de pedidos pendentes
              </span>
            </div>

            {/* Verificação se há pedidos concluidos e se eles existem. Se existirem ele exibe o botão de limpar os pedidos concluidos
            Lembrando que completedeOrders inicia como false, então os pedidos como false são selecionados como PENDENTES 
            Em resumo se ambos corresponderem que são verdadeiros ele vai montar o componente */}
            {completedOrders && completedOrdersExist && (
              <span
                onClick={handleClearAllCompletedOrders}
                className="text-end text-sm opacity-70 hover:cursor-pointer hover:text-red-500 hover:opacity-100 hover:underline transition duration-150 ease-in-out block shadow-md active:shadow-sm active:translate-y-0.5"
              >
                Limpar todos os pedidos concluídos
              </span>
            )}
            {/* Filtrando os pedidos*/}
            {filteredOrders.length === 0 ?
            
            ( // Se não tiver nenhum pedido ele exibe o elemento. Que vai a mensagem respectiva de cada um. 
              <span className="text-center text-lg text-[#7AA2F7]">

                {/* Condicional saber qual menasgem exibir */}
                {completedOrders
                  ? "Nenhum pedido concluído."
                  : "Nenhum pedido pendente."}
              </span>
            )
              :
              (
                // Pega os elementos e exibe eles para o usuario
                filteredOrders.map(order => (
                  <div
                    key={order.id}
                    className="border-b border-[#2D2D44] py-3 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-[#7AA2F7]">{order.clientName}</h3>
                      <div className="text-sm text-[#C0C0C0] space-y-1">
                        <p>
                          <span className="text-[#8888AA]">Produto: </span>{order.productName}
                        </p>
                        <p>
                          <span className="text-[#8888AA]">Quantidade do pedido: </span>{order.amount} unidade{order.amount > 1 ? 's' : ''}
                        </p>
                        <p>
                          <span className="text-[#8888AA]">Valor total: </span>R$ {(order.productValue * order.amount).toFixed(2)}
                        </p>
                        <p>
                          <span className={`${order.status ? "text-green-500" : "text-red-500"}`}>
                            Status: {order.status ? 'Concluído' : 'Pendente'}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Pedidos confimados não exibem este botão  */}
                    {!order.status && (
                      <div className="flex items-center gap-2">
                        <button
                          disabled={order.status}
                          className="text-xs bg-[#3A3A50] text-[#C0C0C0] px-2 py-1 rounded hover:bg-[#50506A] transition duration-150 ease-in-out hover:cursor-pointer shadow-md hover:shadow-lg active:shadow-sm active:translate-y-0.5"
                          onClick={() => handleConfirmDeliveryButton(order.id)}
                        >
                          Confirmar entrega
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
          </>
        )}
    </div>
  );
};