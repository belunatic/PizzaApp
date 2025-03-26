import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem } from "../App.types";

const Menu: FC = () => {
	const { menu, setCurrentOrder } = AppDataContext();

	const placeOrder = (item: MenuItem): void => {
		setCurrentOrder((prev) => [item, ...prev]);
	};

	const pizzaMenu = menu.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<button onClick={() => placeOrder(item)}>{item.name}</button>
			</div>
		);
	});

	return <div>{pizzaMenu}</div>;
};

export default Menu;
