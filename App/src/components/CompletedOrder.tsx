import { FC } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const CompletedOrder: FC = () => {
  const { orderQueue } = AppDataContext();

  //display orders that are not complete
  const displayOrderQueue = orderQueue.map((order, index) => {
    return order.status === "complete" ? (
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
        <td className="px-4 py-3 text-left text-sm">{order.status}</td>
      </tr>
    ) : (
      ""
    );
  });

  return (
    <div className="w-1/2 px-1">
      <h2 className="border-b-2 text-center text-2xl uppercase">
        Completed Order
      </h2>
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

export default CompletedOrder;
