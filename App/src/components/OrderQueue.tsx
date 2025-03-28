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
  const displayOrderQueue = orderQueue.map((order, index) => {
    return order.status === "ordered" ? (
      <tr
        key={order.id}
        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
      >
        <td className="px-4 py-3 text-left text-sm">{order.id}</td>
        <td className="w-1/3 px-4 py-3 text-left text-sm">
          {order.pizzas.map((pizza: MenuItem, index: number) => {
            return order.pizzas.length === 1 ||
              order.pizzas.length - 1 === index ? (
              <span className="block">{pizza.name}</span>
            ) : (
              <span className="block">{pizza.name},</span>
            );
          })}
        </td>
        <td className="px-4 py-3 text-left text-sm font-semibold">
          ${order.total}
        </td>
        <td className="px-4 py-3 text-left text-sm">
          <input
            type="checkbox"
            checked={false}
            onChange={() => completeOrder(order.id)}
            className="mr-2"
          />
          completed
        </td>
      </tr>
    ) : (
      ""
    );
  });

  return (
    <div className="mb-4 w-1/2 px-1">
      <h2 className="border-b-2 text-center text-2xl uppercase">Order Queue</h2>
      {orderQueue.length > 0 ? (
        <table className="w-full">
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
