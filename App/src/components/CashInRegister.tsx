import { FC } from "react";
import { AppDataContext } from "../context/AppContext";

const CashInRegister: FC = () => {
  const { cashInRegister } = AppDataContext();
  return (
    <div className="text-center text-xl md:text-right">
      <p>
        Cash: <span className="font-bold">{cashInRegister}</span>
      </p>
    </div>
  );
};

export default CashInRegister;
