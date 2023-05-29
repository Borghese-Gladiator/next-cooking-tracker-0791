import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Box, Button, ListItem, Link as MuiLink, Paper, Tooltip, Typography } from '@mui/material';

import { startCase } from 'lodash';
import DarkModeToggle from './DarkModeToggle';
import { useRouter } from 'next/router';


/**
 * UTILS
 */
function getTextFromLink(href) {
  return startCase(href.replace(/\/$/, ""));
}

function Logo() {
  return <Typography variant="h5" p={2} sx={{
    "color": (theme) => theme.palette.getContrastText("#191A24")
  }}>LOGO</Typography>
}

/**
 * NAVBAR
 */
const Nav = () => {
  return (
    <Box
      py={3}
      px={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
      }}
    >
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
const Sidebar = ({ pageTitle }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0
      }}
    >
      {/*TODO(5/28) - add logo */}
      <Logo />
      {pageLinks.map(({ href, text }) => {
        console.log('pageTitle', pageTitle)
        const isOpen = pageTitle === text;
        return (
          <Link underline="none" href={href} variant="h6">
            <ListItem
              sx={{
                width: '100%',
                height: 56,
                color: isOpen ? 'primary.main' : 'white',
                borderLeftWidth: isOpen && '6px',
                ':hover': {
                  backgroundColor: isOpen && 'link.hover'
                }
              }}
            >
              {text}
            </ListItem>
          </Link>
        );
      })}
    </Paper >
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
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 5fr',
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