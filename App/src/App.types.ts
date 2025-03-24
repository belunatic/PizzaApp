import React from "react";

// Define types
export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
	currentOrder: MenuItem[];
	OrderQueue: Order[];
	setCurrentOrder: React.Dispatch<React.SetStateAction<MenuItem[]>>;
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
