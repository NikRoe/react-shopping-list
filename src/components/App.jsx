import "./App.css";
import { Items } from "./Items";
import { Title } from "./Title";
import { SearchBar } from "./Searchbar";

export function App() {
  return (
    <>
      <Title text="Shopping List" />
      <Items />
      <Title text="What do you want to buy?" />
      <SearchBar></SearchBar>
    </>
  );
}
