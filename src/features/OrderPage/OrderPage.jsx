import { useState } from "react";

import { Box, Chip, Paper, Typography } from "@mui/material";

import Content from "@/components/Content";
import IngredientsPanel from "@/features/IngredientsPanel";
import RecipeList from "@/features/RecipePage/RecipeList";


const OrderPage = ({ recipes }) => {
  // const initialIngredients = [...new Set(recipes.flatMap(({ ingredients }) => ingredients))];
  const initialOrders = recipes.filter(({ isOrdered }) => isOrdered).map(({ id }) => id);
  const [orders, setOrders] = useState(initialOrders);
  const orderedRecipes = recipes.filter(({ id }) => orders.includes(id));
  const ingredients = [...new Set(orderedRecipes.flatMap(({ ingredients }) => ingredients))];

  return (
    <Content>
      <Box>
        <Typography variant="h6">Ingredients</Typography>
        <IngredientsPanel ingredients={ingredients} />
      </Box>
      <br />
      <hr />
      <Box>
        <Typography variant="h6">Current Order</Typography>
        <RecipeList
          recipes={orderedRecipes}
          orders={orders}
          setOrders={setOrders}
        />
      </Box>
    </Content>
  )
}

export default OrderPage;