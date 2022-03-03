import { items } from "../../example-items";
import "./ItemList.css";
import { Items } from "./Items";

export function ItemList() {
  return (
    <>
      <ul className="Item__container">
        {items.map(item => (
          <Items item={item} />
        ))}
      </ul>
    </>
  );
}
