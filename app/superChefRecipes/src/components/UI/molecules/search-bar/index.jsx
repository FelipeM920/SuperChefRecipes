import "./style.scss"
import TextInput from "../../atoms/text-input"
import SearchButton from "../../atoms/search-button"

export default function SearchBar() {
  return (
    <section className="search-bar">
      <TextInput></TextInput>
      <SearchButton></SearchButton>
    </section>
  );
}