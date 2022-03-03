import "./Items.css";
import { useState } from "react";

export function Items({ item }) {
  const [isHidden, setIsHidden] = useState(false);

  function handeClick() {
    setIsHidden(!isHidden);
  }

  return (
    <li
      className={`Item__default ${isHidden ? "Hide" : ""}`}
      onClick={handeClick}
    >
      {item.name.de}
    </li>
  );
}
