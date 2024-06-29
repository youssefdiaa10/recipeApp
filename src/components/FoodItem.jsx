import styles from "./foodItem.module.css";

function FoodItem({ setFoodId, key, item }) {
  return (
    <>
      <div key={key} className={styles.itemContainer}>
        <img className={styles.itemImg} src={item.image} alt={item.title} />
        <div className={styles.itemContent}>
          <p className={styles.itemName}>{item.title}</p>
        </div>
        <div className={styles.itemButtonContainer}>
          <button
            onClick={() => {
              setFoodId(item.id);
            }}
            className={styles.itemButton}
            type="button"
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
