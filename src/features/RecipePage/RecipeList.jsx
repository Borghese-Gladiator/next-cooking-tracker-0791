import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useEffect } from "react";

const RecipeList = ({
  recipes,
  orders,
  setOrders,
  hideIngredients = false,
  hideComments = true,
}) => {
  const addToOrder = (id) => {
    setOrders([...orders, id])
  };
  const removeFromOrder = (id) => {
    setOrders(orders.filter((orderId) => orderId !== id));
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
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            hideIngredients={hideIngredients}
            hideComments={hideComments}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;