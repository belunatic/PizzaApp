import { useState, FC, createContext, useContext, ReactNode } from "react";

// Define types
interface MenuItem {
	id: number;
	name: string;
	price: number;
}

interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppDataContext = () => useContext(AppContext);

let initialId = 1;

const initialMenu = [
	{ id: initialId++, name: "Margherita", price: 8 },
	{ id: initialId++, name: "Pepperoni", price: 10 },
	{ id: initialId++, name: "Hawaiian", price: 10 },
	{ id: initialId++, name: "Veggie", price: 9 },
];

//define type for AppProviderProps
interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
	const [menu, setMenu] = useState(initialMenu);
	const [nextPizzaId, setNextpizzaId] = useState(initialId);

	return (
		<AppContext.Provider value={{ menu, nextPizzaId }}>
			{children}
		</AppContext.Provider>
	);
};
