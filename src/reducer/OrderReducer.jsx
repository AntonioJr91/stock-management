export default function OrderReducer(orders, action) {
   switch (action.type) {

      case 'add':
         return [...orders, action.payload];

      //Esse modelo abaixo é como no curso, mas achei mto verboso e repetitivo no context. Fazemos o processo 2x uma pra UI e outra pro Storage.
      // const newOrder = {
      //    id: action.payload.id,
      //    productName: action.payload.productName,
      //    productValue: action.payload.productValue,
      //    amount: action.payload.amount,
      //    clientName: action.payload.clientName,
      //    status: action.payload.status,
      // }
      // const updatedOrders = [...orders, newOrder];
      // return updatedOrders;

      case 'updateOrderPending': 
      const updateOrderPending = orders.map(order => {
         if (order.id === action.payload && order.status === false) {
            return { ...order, status: true }
         };
         return order;
      });
      return updateOrderPending


      case 'clearAllCompletedOrders':
         return orders.filter(order => order.status !== true);

      default: return orders
   }
}