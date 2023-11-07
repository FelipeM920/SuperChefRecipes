import Navbar from "../../molecules/navbar/index";
import SearchBar from "../../molecules/search-bar";

export default function SearchHeader() {
  return (
    <section className="Search-header">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </section>
  );
}
