import React from "react";

// Define types
export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
	orderQueue: Order[];
	setOrderQueue: React.Dispatch<React.SetStateAction<Order[]>>;
	currentOrder: MenuItem[];
	setCurrentOrder: React.Dispatch<React.SetStateAction<MenuItem[]>>;
	nextOrderId: number;
	setNextOderId: React.Dispatch<React.SetStateAction<number>>;
	cashInRegister: number;
	setCashInTheRegister: React.Dispatch<React.SetStateAction<number>>;
}
export interface MenuItem {
	id: number;
	name: string;
	price: number;
}

export type Order = {
	id: number;
	pizzas: MenuItem[];
	status: "ordered" | "complete";
	total: number;
};
