import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { startCase } from 'lodash';
import DarkModeToggle from './DarkModeToggle';


const PageHeaderBar = ({ pageTitle }) => {
  return (
    <Box sx={{ background: 'black' }}>{pageTitle}</Box>
  );
}

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

// Link code from: https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a
function Link(props) {
  return <MuiLink component={NextLink} {...props} />
}
const pageLinks = ['/orders', '/recipes'].map((href, idx) => ({
  href,
  text: startCase(href.replace(/\/$/, ""))
}));
const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {pageLinks.map(({ href, text }) => <Link href={href}>{text}</Link>)}
    </Box>
  )
}

function Layout({ children, title: pageTitle }) {
  return (
    <>
      <Head>
        <title>TS Cooking - {`${pageTitle}`}</title>
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