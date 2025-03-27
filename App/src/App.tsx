import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";
import OrderQueue from "./components/OrderQueue";
import CompletedOrder from "./components/CompletedOrder";
import CashInRegister from "./components/CashInRegister";
import "./App.css";

const App: FC = () => {
  return (
    <div className="bg-orange-900 p-2">
      <div className="flex h-screen w-full flex-col gap-y-8 bg-white p-4">
        <h1 className="text-center text-4xl font-bold uppercase">
          Jazz In-Store Pizza
        </h1>
        <CashInRegister />
        <div className="flex flex-wrap">
          <Menu />
          <PlaceOrder />
          <OrderQueue />
          <CompletedOrder />
        </div>
      </div>
    </div>
  );
};

export default App;
