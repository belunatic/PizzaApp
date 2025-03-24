// Define types
export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
	currentOrder: MenuItem[];
	OrderQueue: Order[];
	setCurrentOrder: (order: MenuItem[]) => void;
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
