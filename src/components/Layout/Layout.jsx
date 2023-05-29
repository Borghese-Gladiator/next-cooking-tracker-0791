import { Box, Paper, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from './Nav';
import Sidebar from './Sidebar';
import { getTextFromLink } from './utils';


const PageHeaderBar = ({ pageTitle }) => {
  return (
    <Typography variant="h5" mb={2}>{pageTitle}</Typography>
  );
}

function Layout({ children }) {
  const path = useRouter().asPath;
  const pageTitle = getTextFromLink(path);
  return (
    <>
      <Head>
        <title>TS Cooking - {`${path}`}</title>
        <meta name="description" content="I've been cooking a lot and wanted somewhere to track what I've been making for myself. No plans for using social media since I want custom formatted comments stuff and it'll force me to publish things to friends even when the result looks bad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 5fr',
        minHeight: '100vh'
      }}>
        <Sidebar pageTitle={pageTitle} />
        <Paper>
          <Nav />
          <PageHeaderBar pageTitle={pageTitle} />
          {children}
        </Paper>
      </Box>
    </>
  )
}

export default Layout;