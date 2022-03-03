import { items } from "../../example-items";
import "./ItemList.css";
import { Items } from "./Items";
import { useState } from "react";

export function ItemList() {
  const [shoppingItems, setShoppingItems] = useState(items);

  function handeClick(itemId) {
    setShoppingItems(shoppingItems.filter(item => item._id !== itemId));
  }

  return (
    <>
      <ul className="Item__container">
        {shoppingItems.map(item => (
          <Items item={item} someFunction={handeClick} key={item._id} />
        ))}
      </ul>
    </>
  );
}

/* Trying out to combine deleting and creating in one step:

useState

const [recentlyItems, setRecentlyItems] = useState([]);

first handle function

setRecentlyItems(
      shoppingItems.map(item => {
        if (item._id === itemId) {
          return [
            ...recentlyItems,
            console.log("item: ", item),
            console.log("itemId: ", itemId),
            {
              _id: item._id,
              name: item.name,
              _type: item._type,
              _category: item.category,
            },
          ];
        } else {
          return item;
        }
      })
    );


second handle function

  function handleRecentlyClick(itemId) {
    setRecentlyItems([
      ...recentlyItems,
      {
        _id: itemId._id,
        name: itemId.name,
        _type: itemId._type,
        _category: itemId._category,
      },
    ]);
  }


Part from return statement

      <ul className="Item__container">
        {recentlyItems.map(item => (
          <Items
            item={item}
            someFunction={handleRecentlyClick}
            key={item._id}
          />
        ))}
      </ul>


*/
