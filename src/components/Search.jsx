import { useEffect, useState } from "react";
import styles from "./search.module.css";

const Url = "https://api.spoonacular.com/recipes/complexSearch";
const Api_Key = "40bb00fd91524fb7a705f234e26bf7f4";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${Url}?query=${query}&apiKey=${Api_Key}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          type="text"
        />
      </div>
    </>
  );
}

export default Search;
