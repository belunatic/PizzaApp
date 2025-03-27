import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";
import OrderQueue from "./components/OrderQueue";
import CompletedOrder from "./components/CompletedOrder";
import CashInRegister from "./components/CashInRegister";

const App: FC = () => {
	return (
		<div className="h-screen w-full p-4 flex flex-col">
			<h1>Jazz Pizza Joint</h1>
			<CashInRegister />
			<Menu />
			<PlaceOrder />
			<OrderQueue />
			<CompletedOrder />
		</div>
	);
};

export default App;
