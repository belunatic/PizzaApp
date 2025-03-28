import { FC } from "react";
import Menu from "./components/Menu";
import PlaceOrder from "./components/PlaceOrder";
import OrderQueue from "./components/OrderQueue";
import CompletedOrder from "./components/CompletedOrder";
import CashInRegister from "./components/CashInRegister";
import "./App.css";

const App: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-orange-900 p-2">
      <div className="flex w-full grow flex-col gap-y-8 bg-white p-4">
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
      <footer className="text-center">
        <p>
          Developed by{" "}
          <a
            className="font-medium text-blue-500 underline"
            href="https://github.com/belunatic"
          >
            Abel Sila
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
