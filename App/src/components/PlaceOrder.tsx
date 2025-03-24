import { FC } from "react";
import { MenuItem } from "../App.types";
import { AppDataContext } from "../context/AppContext";

const PlaceOrder: FC = () => {
	const { currentOrder } = AppDataContext();

	const order = currentOrder.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<p>
					{item.name} <span>{item.price}</span>
				</p>
			</div>
		);
	});
	return <div>{order}</div>;
};

export default PlaceOrder;
