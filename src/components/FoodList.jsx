import FoodItem from "./FoodItem";

function FoodList({ foodData, setFoodId }) {
  return (
    <>
      <h4>
        {foodData.map((item) => (
          <FoodItem setFoodId={setFoodId} key={item.id} item={item} />
        ))}
      </h4>
    </>
  );
}

export default FoodList;
