import { FC, useEffect, useState } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const PlaceOrder: FC = () => {
  const {
    currentOrder,
    setCurrentOrder,
    nextOrderId,
    setNextOderId,
    setOrderQueue,
    setCashInTheRegister,
  } = AppDataContext();
  //keep track of the total price of the order
  const [total, setTotal] = useState<number>(0);
  //display the order
  const order = currentOrder.map((item: MenuItem) => {
    return (
      <div key={item.id} className="border-b-2 p-1">
        <p className="flex justify-between">
          {item.name}{" "}
          <span>
            ${item.price}
            <button
              onClick={() => removeItem(item.id)}
              className="btn ml-2 bg-red-400 px-2 md:ml-4"
            >
              X
            </button>
          </span>
        </p>
      </div>
    );
  });

  //remove an item from the order
  const removeItem = (id: number) => {
    setCurrentOrder(currentOrder.filter((item) => item.id !== id));
  };

  const submitOrder = () => {
    // Ensure there are items to submit
    if (currentOrder.length === 0) {
      console.error("Cannot submit an empty order.");
      return;
    }

    setOrderQueue((prev) => [
      ...prev,
      {
        id: nextOrderId, // Assign unique order ID
        pizzas: [...currentOrder], // Add the pizzas from the current ord
        status: "ordered", // Set initial status
        total: total,
      },
    ]);

    //add money into register
    setCashInTheRegister((prev) => prev + total);

    //adjust the order Id
    setNextOderId((prev) => prev + 1);
    //clear the order
    setCurrentOrder([]);
  };

  useEffect(() => {
    setTotal(currentOrder.reduce((acc, item) => acc + item.price, 0));
  }, [currentOrder]);

  return (
    <div className="mb-4 w-1/2 px-1">
      <h2 className="border-b-2 text-center text-2xl uppercase">Order</h2>

      <div>{order}</div>
      {total > 0 && (
        <div>
          <div className="flex justify-end gap-2 pt-2">
            <p className="font-semibold">Total:</p>
            <p className="px-1">${total}</p>
          </div>
          <div>
            <button
              onClick={submitOrder}
              className="btn mt-4 w-full bg-orange-400 p-2 text-center"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
