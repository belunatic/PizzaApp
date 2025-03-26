import { FC, useEffect, useState } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";
import OrderQueue from "./OrderQueue";

const PlaceOrder: FC = () => {
	const {
		currentOrder,
		setCurrentOrder,
		nextOrderId,
		setNextOderId,
		setOrderQueue,
		orderQueue,
	} = AppDataContext();
	//keep track of the total price of the order
	const [total, setTotal] = useState<number>(0);
	//display the order
	const order = currentOrder.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<p>
					{item.name} <span>{item.price}</span>{" "}
					<span onClick={() => removeItem(item.id)}>X</span>
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

		//adjust the order Id
		setNextOderId((prev) => prev + 1);
		//clear the order
		setCurrentOrder([]);
	};

	useEffect(() => {
		setTotal(currentOrder.reduce((acc, item) => acc + item.price, 0));
	}, [currentOrder]);

	return (
		<div>
			<div>{order}</div>
			{total > 0 && (
				<div>
					<div>
						<p>Total</p>
						<p>{total}</p>
					</div>
					<div>
						<button onClick={submitOrder}> Place Order</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default PlaceOrder;
