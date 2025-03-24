import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";

const App: FC = () => {
	return (
		<div>
			<h1>Jazz Pizza Joint</h1>
			<Menu />
			<PlaceOrder />
		</div>
	);
};

export default App;
