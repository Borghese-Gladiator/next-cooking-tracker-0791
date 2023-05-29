import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";


const RecipePage = ({ recipes }) => {
  const sortedRecipes = [...recipes].sort((recipeA, recipeB) => (recipeB.createdAt - recipeA.createdAt));
  const [orderList, setOrderList] = useState(recipes.filter(({ isOrdered }) => isOrdered));
  const addToOrder = (id) => {
    setOrderList([...orderList, id])
  };
  const removeFromOrder = (id) => {
    setOrderList(orderList.filter(({ id: orderId }) => orderId !== id));
  };
  const onSubmit = () => {
    // updates isOrdered attribute for all recipes
    patchRecipes(orderList);
  }

  return (
    <Box
      p={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: (theme) => theme.color.gray,
      }}
    >
      <Grid container gap={2}>
        {sortedRecipes.map((recipe, idx) => (
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
    </Box>
  )
};

export default RecipePage;