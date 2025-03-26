import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";
import OrderQueue from "./components/OrderQueue";
import CompletedOrder from "./components/CompletedOrder";

const App: FC = () => {
	return (
		<div>
			<h1>Jazz Pizza Joint</h1>
			<Menu />
			<PlaceOrder />
			<OrderQueue />
			<CompletedOrder />
		</div>
	);
};

export default App;
