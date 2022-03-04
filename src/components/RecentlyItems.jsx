import "./RecentlyItems.css";

export function RecentlyItems({ item }) {
  return (
    <li className={`Item__default`}>{item[0].name ? item[0].name.de : ""}</li>
  );
}
