import "./Items.css";

export function Items({ item, someFunction }) {
  return (
    <li className={`Item__default`} onClick={() => someFunction(item._id)}>
      {item.name.de}
    </li>
  );
}
