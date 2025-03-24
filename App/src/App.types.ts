// Define types
export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
	currentOrder: Order[];
	OrderQueue: Order[];
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
