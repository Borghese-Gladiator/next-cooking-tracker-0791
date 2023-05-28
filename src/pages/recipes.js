import Head from 'next/head';

import DarkModeToggle from '@/components/DarkModeToggle';
import FoodCard from '@/features/FoodCard/FoodCard';
import { baseURL } from "@/utils/constants";
import { Grid } from '../../node_modules/@mui/material/index';

function RecipePage({ cookingHistory }) {
  return (
    <Grid container gap={2}>
      {cookingHistory.map((item, idx) => <Grid item sm={6} md={4} lg={3} xl={2}><FoodCard key={idx} {...item} /></Grid>)}
    </Grid>
  )
}

RecipePage.getInitialProps = async (ctx) => {
  // Fetch constant from file (technically could use a require and load it, but it's cleaner as a RESET call)
  const res = await fetch(`${baseURL}/api/recipes`);
  const json = await res.json();
  return { recipes: json?.recipes ?? [] };
};

export default RecipePage;