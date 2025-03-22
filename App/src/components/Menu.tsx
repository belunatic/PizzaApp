import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem } from "../App.types";

const Menu: FC = () => {
	const { menu } = AppDataContext();

	const pizzaMenu = menu.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<button>{item.name}</button>
			</div>
		);
	});

	return <div>{pizzaMenu}</div>;
};

export default Menu;
