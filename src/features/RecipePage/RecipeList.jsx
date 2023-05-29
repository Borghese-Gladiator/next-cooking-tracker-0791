import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, orders, setOrders }) => {
  const addToOrder = (id) => {
    setOrders([...orders, id])
  };
  const removeFromOrder = (id) => {
    setOrders(orders.filter(({ id: orderId }) => orderId !== id));
  };
  return (
    <Grid
      container
      gap={2}
      justifyContent='center'
      alignItems='center'
    >
      {recipes.map((recipe, idx) => (
        <Grid item sm={12} md={6} lg={4} xl={3}>
          <RecipeCard
            {...recipe}
            key={idx}
            hideIngredients={true}
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;