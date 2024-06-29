import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const Url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const Api_Key = "40bb00fd91524fb7a705f234e26bf7f4";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${Url}?apiKey=${Api_Key}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <>
      <div>
        <div className={styles.recipeCard}>
          <h1 className={styles.recipeName}>{food.title}</h1>

          <img className={styles.recipeImg} src={food.image} alt="food" />

          <div className={styles.recipeDetails}>
            <span>
              <strong>⏰ {food.readyInMinutes} Minutes</strong>
            </span>

            <span>
              <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
            </span>

            <span>
              <strong>
                {food.vegetarian ? "🥕 Vegetarian" : "🍖 Not Vegetarian"}
              </strong>
            </span>

            <span>
              <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
            </span>
          </div>

          <div>
            <span>
              <strong>💲{food.pricePerServing / 100} per serving</strong>
            </span>
          </div>

          <div>
            <h2>Ingredients</h2>
            <div>
              <ItemList food={food} isLoading={isLoading} />
            </div>
          </div>

          <div>
            <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
              <ul>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDetails;
