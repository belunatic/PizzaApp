import { FC } from "react";
import { AppDataContext } from "../context/AppContext";

const CashInRegister: FC = () => {
  const { cashInRegister } = AppDataContext();
  return (
    <div className=" text-center md:text-right">
      <p>
        Cash in Register: <span>{cashInRegister}</span>
      </p>
    </div>
  );
};

export default CashInRegister;
