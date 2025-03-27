import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";
import OrderQueue from "./components/OrderQueue";
import CompletedOrder from "./components/CompletedOrder";
import CashInRegister from "./components/CashInRegister";
import "./App.css";

const App: FC = () => {
  return (
    <div className="p-2  bg-orange-900">
      <div className=" h-screen w-full flex flex-col gap-8 p-4 bg-white">
        <h1 className="text-center text-4xl font-bold uppercase">
          Jazz In-Store Pizza
        </h1>
        <CashInRegister />
        <Menu />
        <PlaceOrder />
        <OrderQueue />
        <CompletedOrder />
      </div>
    </div>
  );
};

export default App;
