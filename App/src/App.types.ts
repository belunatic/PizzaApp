// Define types
export interface MenuItem {
	id: number;
	name: string;
	price: number;
}

export interface AppContextType {
	menu: MenuItem[];
	nextPizzaId: number;
}
