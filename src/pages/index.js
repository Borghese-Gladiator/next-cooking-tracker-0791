import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { baseURL } from "@/utils/constants";
import { formatDate } from "@/utils/dates";

const inter = Inter({ subsets: ['latin'] });

const Card = (props) => {
  const { thumbnail, name, createdAt, updatedAt } = props;
  console.log('updatedAt', updatedAt);
  console.log('thumbnail', thumbnail);
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);
  return (
    <div className="card">
      {thumbnail && <img className="cardThumbnail" src={thumbnail} alt="thumbnail" />}
      <div className="cardBody">
        <h2>{name}</h2>
        <p className="cardSecondary">{`Created At: ${formatDate(createdAtDate)}`}</p>
        <p className="cardSecondary">{`Updated At: ${formatDate(updatedAtDate)}`}</p>
      </div>
    </div>
  );
};

/*
Card.PropTypes = {
  thumbnail: string, // path to asset in /public
}
*/

function Home({ cookingHistory }) {
  return (
    <>
      <Head>
        <title>TS Cooking Tracker</title>
        <meta name="description" content="I've been cooking a lot and wanted somewhere to track what I've been making for myself. No plans for using social media since I want custom formatted comments stuff and it'll force me to publish things to friends even when the result looks bad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1>TS Cooking Tracker</h1>
        <div className="gridContainer">
          {cookingHistory.map((item, idx) => <Card key={idx} {...item} />)}
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`${baseURL}/api/getCookingHistory`);
  const json = await res.json();
  return { cookingHistory: json?.cookingHistory ?? [] };
};

export default Home;