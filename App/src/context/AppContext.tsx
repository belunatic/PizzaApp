import { useState, FC, createContext, useContext, ReactNode } from "react";
import { AppContextType, MenuItem, Order } from "../App.types";

const AppContext = createContext<AppContextType | null>(null);

export const AppDataContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("Context must be used within an AppProvider");
	}

	return context;
};

let initialId = 1;

const initialMenu = [
	{ id: initialId++, name: "Margherita", price: 8 },
	{ id: initialId++, name: "Pepperoni", price: 10 },
	{ id: initialId++, name: "Hawaiian", price: 10 },
	{ id: initialId++, name: "Veggie", price: 9 },
];

const initialOrder: Order[] = [];

//define type for AppProviderProps
interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
	const [menu, setMenu] = useState(initialMenu);
	const [nextPizzaId, setNextpizzaId] = useState(initialId);
	const [currentOrder, setCurrentOrder] = useState<MenuItem[]>([]);
	const [orderQueue, setOrderQueue] = useState(initialOrder);

	return (
		<AppContext.Provider
			value={{ menu, nextPizzaId, currentOrder, setCurrentOrder }}>
			{children}
		</AppContext.Provider>
	);
};
