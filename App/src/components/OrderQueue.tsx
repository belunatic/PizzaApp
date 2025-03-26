import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem, Order } from "../App.types";

const OrderQueue: FC = () => {
	const { orderQueue, setOrderQueue } = AppDataContext();

	//when the order is complete, change it status
	const completeOrder = (id: number) => {
		const updatedOrderQueue: Order[] = orderQueue.map((order) =>
			order.id === id ? { ...order, status: "complete" } : order
		);
		setOrderQueue([...updatedOrderQueue]);
	};

	//display orders that are not complete
	const displayOrderQueue = orderQueue.map((order) => {
		return order.status === "ordered" ? (
			<tr key={order.id}>
				<td>{order.id}</td>
				<td>
					{order.pizzas.map((pizza: MenuItem, index: number) => {
						return order.pizzas.length === 1 ||
							order.pizzas.length - 1 === index
							? `${pizza.name} `
							: `${pizza.name}, `;
					})}
				</td>
				<td>{order.total}</td>
				<td>
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
		<div>
			{displayOrderQueue ? (
				<table>
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Pizzas</th>
							<th>Total</th>
							<th>Status</th>
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
