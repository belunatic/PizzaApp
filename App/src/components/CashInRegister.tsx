import { FC } from "react";
import { AppDataContext } from "../context/AppContext";

const CashInRegister: FC = () => {
	const { cashInRegister } = AppDataContext();
	return (
		<div>
			<p>Cash in Register: {cashInRegister}</p>
		</div>
	);
};

export default CashInRegister;
