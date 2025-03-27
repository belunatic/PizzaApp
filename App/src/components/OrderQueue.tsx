import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem, Order } from "../App.types";

const OrderQueue: FC = () => {
  const { orderQueue, setOrderQueue } = AppDataContext();

  //when the order is complete, change it status
  const completeOrder = (id: number) => {
    const updatedOrderQueue: Order[] = orderQueue.map((order) =>
      order.id === id ? { ...order, status: "complete" } : order,
    );
    setOrderQueue([...updatedOrderQueue]);
  };

  //display orders that are not complete
  const displayOrderQueue = orderQueue.map((order) => {
    return order.status === "ordered" ? (
      <tr key={order.id}>
        <td className="px-4 py-3 text-left text-sm">{order.id}</td>
        <td className="w-1/3 px-4 py-3 text-left text-sm text-wrap">
          {order.pizzas.map((pizza: MenuItem, index: number) => {
            return order.pizzas.length === 1 ||
              order.pizzas.length - 1 === index ? (
              <span>{pizza.name} </span>
            ) : (
              <span>{pizza.name},</span>
            );
          })}
        </td>
        <td className="px-4 py-3 text-left text-sm">{order.total}</td>
        <td className="px-4 py-3 text-left text-sm">
          <input
            type="checkbox"
            checked={false}
            onChange={() => completeOrder(order.id)}
          />
          completed
        </td>
      </tr>
    ) : (
      ""
    );
  });

  return (
    <div className="w-1/2">
      {displayOrderQueue ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                ID
              </th>
              <th className="w-1/3 px-4 py-3 text-left text-sm font-semibold uppercase">
                Pizzas
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Total
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{displayOrderQueue}</tbody>
        </table>
      ) : (
        "No Order Places"
      )}
    </div>
  );
};

export default OrderQueue;
