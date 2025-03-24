import { FC, useEffect, useState } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const PlaceOrder: FC = () => {
	const { currentOrder, setCurrentOrder } = AppDataContext();
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

	useEffect(() => {
		setTotal(currentOrder.reduce((acc, item) => acc + item.price, 0));
	}, [currentOrder]);

	return (
		<div>
			<div>{order}</div>
			{total > 0 && (
				<div>
					<p>Total</p>
					<p>{total}</p>
				</div>
			)}
		</div>
	);
};

export default PlaceOrder;
