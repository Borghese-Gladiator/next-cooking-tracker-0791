import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Link as MuiLink, Typography } from '@mui/material';

import { startCase } from 'lodash';
import DarkModeToggle from './DarkModeToggle';
import { useRouter } from 'next/router';


function getTextFromLink(href) {
  return startCase(href.replace(/\/$/, ""));
}

/**
 * NAVBAR
 */
const Nav = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
    }} mb={3} mx={2}>
      <Typography variant="h4">TS Cooking</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <DarkModeToggle />
    </Box>
  )
}

/**
 * SIDEBAR
 */
// Link code from: https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a
const Link = (props) => {
  return <MuiLink component={NextLink} {...props} />
}
const pageLinks = ['/orders', '/recipes'].map((href, idx) => ({
  href,
  text: getTextFromLink(href)
}));
const Sidebar = () => {
  return (
    <Box m={2} sx={{ display: 'flex', flexDirection: 'column' }}>
      {pageLinks.map(({ href, text }) => <Link href={href} variant="h4">{text}</Link>)}
    </Box>
  )
}

/**
 * CONTENT HEADER
 */
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
      <Nav />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 5fr'
      }}>
        <Sidebar />
        <main>
          <PageHeaderBar pageTitle={pageTitle} />
          {children}
        </main>
      </Box>
    </>
  )
}

export default Layout;