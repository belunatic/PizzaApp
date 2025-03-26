import { FC } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const CompletedOrder: FC = () => {
	const { orderQueue } = AppDataContext();

	//display orders that are not complete
	const displayOrderQueue = orderQueue.map((order) => {
		return order.status === "complete" ? (
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
				<td> {order.status} </td>
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

export default CompletedOrder;
