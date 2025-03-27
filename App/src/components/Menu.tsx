import { FC } from "react";
import { AppDataContext } from "../context/AppContext";
import { MenuItem } from "../App.types";

const Menu: FC = () => {
  const { menu, setCurrentOrder } = AppDataContext();

  const placeOrder = (item: MenuItem): void => {
    setCurrentOrder((prev) => [...prev, item]);
  };

  const pizzaMenu = menu.map((item: MenuItem) => {
    return (
      <div key={item.id}>
        <button
          onClick={() => placeOrder(item)}
          className="btn cursor-pointer rounded-sm bg-lime-600 px-4 py-8 text-center"
        >
          {item.name}
        </button>
      </div>
    );
  });

  return (
    <div className="mb-4 w-1/2 px-1">
      <h2 className="mb-2 border-b-2 text-center text-2xl uppercase">Menu</h2>
      <div className="grid grid-cols-4">{pizzaMenu}</div>
    </div>
  );
};

export default Menu;
