import Head from 'next/head';

import DarkModeToggle from '@/components/DarkModeToggle';
import FoodCard from '@/features/FoodCard/FoodCard';
import { baseURL } from "@/utils/constants";

function Home({ cookingHistory }) {
  return (
    <>
      <Head>
        <title>TS Cooking Tracker</title>
        <meta name="description" content="I've been cooking a lot and wanted somewhere to track what I've been making for myself. No plans for using social media since I want custom formatted comments stuff and it'll force me to publish things to friends even when the result looks bad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        BLAH
      </main>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  // Fetch constant from file (technically could use a require and load it, but it's cleaner as a RESET call)
  const res = await fetch(`${baseURL}/api/getCookingHistory`);
  const json = await res.json();
  return { cookingHistory: json?.cookingHistoryList ?? [] };
};

export default Home;