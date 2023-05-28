import { Button, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipePage = ({ recipes }) => {
  return (
    <>
      <Button>Sort</Button>
      <Grid container gap={2}>
        {recipes.map((recipe, idx) => (
          <Grid item sm={6} md={4} lg={3} xl={2}>
            <RecipeCard key={idx} {...recipe} />
          </Grid>
        ))}
      </Grid>
    </>
  )
};

export default RecipePage;