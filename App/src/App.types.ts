// Define types
export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
	orderQueue: Order[];
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
};
