import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem } from "../App.types";

const Menu: FC = () => {
	const { menu, currentOrder, setCurrentOrder } = AppDataContext();

	const placeOrder = (item: MenuItem): void => {
		setCurrentOrder(() => currentOrder.unshift(item));
	};

	const pizzaMenu = menu.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<button onClick={() => placeOrder}>{item.name}</button>
			</div>
		);
	});

	return <div>{pizzaMenu}</div>;
};

export default Menu;
