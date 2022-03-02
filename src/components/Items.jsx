import { items } from "../../example-items";
import "./Items.css";

export function Items() {
  return (
    <>
      <ul className="Item__container">
        {items.map(item => (
          <li className="Item__default">{item.name.de}</li>
        ))}
      </ul>
    </>
  );
}
