import { FC } from "react";
import { AppDataContext } from "./context/AppContext";

// Define types
interface MenuItem {
	id: number;
	name: string;
	price: number;
}

const App: FC = () => {
	const { menu } = AppDataContext();

	const pizzaMenu = menu.map((item: MenuItem) => {
		return (
			<div key={item.id}>
				<button>{item.name}</button>
			</div>
		);
	});
	return (
		<div>
			<h1>Pizza Joint</h1>
			{pizzaMenu}
		</div>
	);
};

export default App;
