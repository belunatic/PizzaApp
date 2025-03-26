import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem } from "../App.types";

const OrderQueue: FC = () => {
	const { orderQueue } = AppDataContext();

	const displayOrderQueue = orderQueue.map((order) => {
		return (
			<table>
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Pizzas</th>
						<th>Total</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{orderQueue.map((order) => (
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
							<td>{order.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	});
	return <div>{displayOrderQueue ? displayOrderQueue : "No Order Places"}</div>;
};

export default OrderQueue;
