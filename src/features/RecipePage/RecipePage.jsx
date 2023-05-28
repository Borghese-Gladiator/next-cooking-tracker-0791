import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipePage = ({ recipes }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button>Sort</Button>
      <Grid container gap={2}>
        {recipes.map((recipe, idx) => (
          <Grid item sm={12} md={6} lg={4} xl={3}>
            <RecipeCard
              {...recipe}
              key={idx}
              hideIngredients={true}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};

export default RecipePage;