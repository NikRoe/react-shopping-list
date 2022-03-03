import { items } from "../../example-items";
import "./ItemList.css";
import { Items } from "./Items";

export function RecentlyList() {
  return (
    <>
      <ul className="Item__container">
        {items.map(item => (
          <Items item={item} key={item._id} />
        ))}
      </ul>
    </>
  );
}
