import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import Content from "@/components/Content";
import RecipeList from "./RecipeList";


const RecipePage = ({ recipes }) => {
  const sortedRecipes = [...recipes].sort((recipeA, recipeB) => (recipeB.createdAt - recipeA.createdAt));
  const initialOrders = recipes.filter(({ isOrdered }) => isOrdered).map(({ id }) => id);
  const [orders, setOrders] = useState(initialOrders);
  const onSubmit = () => {
    // updates isOrdered attribute for all recipes
    patchRecipes(orders);
  }

  return (
    <Content>
      <RecipeList
        recipes={sortedRecipes}
        orders={orders}
        setOrders={setOrders}
      />
    </Content >
  )
};

export default RecipePage;