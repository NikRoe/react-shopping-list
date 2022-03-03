import "./App.css";
import { ItemList } from "./ItemList";
import { Title } from "./Title";
import { SearchBar } from "./Searchbar";
import { RecentlyList } from "./RecentlyList";

export function App() {
  return (
    <>
      <Title text="Shopping List" />
      <ItemList />
      <Title text="What do you want to buy?" />
      <SearchBar></SearchBar>
      <RecentlyList />
    </>
  );
}
