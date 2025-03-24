import { FC, useEffect, useState } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const PlaceOrder: FC = () => {
	const { currentOrder } = AppDataContext();

	const [total, setTotal] = useState<number>(0);

	const order = currentOrder.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<p>
					{item.name} <span>{item.price}</span>
				</p>
			</div>
		);
	});

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
