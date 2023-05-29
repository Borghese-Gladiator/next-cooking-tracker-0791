import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Box, Button, ListItem, ListItemIcon, ListItemText, Link as MuiLink, Paper, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import FastFoodIcon from '@mui/icons-material/Fastfood';

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
const pageLinks = [
  {
    icon: <FastFoodIcon />,
    href: '/orders'
  },
  {
    icon: <FastFoodIcon />,
    href: '/recipes'
  }
].map(({ icon, href }) => ({
  icon,
  href,
  text: getTextFromLink(href)
}));
const Sidebar = ({ pageTitle }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        backgroundColor: (theme) => theme.palette.background.sidebar
      }}
    >
      {/*TODO(5/28) - add logo */}
      <Logo />
      {pageLinks.map(({ href, text, icon }) => {
        console.log('pageTitle', pageTitle)
        const isOpen = pageTitle === text;
        return (
          <Box pl={2}>
            <Link underline="none" href={href} variant="h6" color="inherit">
              <ListItem
                sx={{
                  width: '100%',
                  height: 56,
                  borderLeft: (theme) => isOpen && `4px ${theme.palette.primary.main} solid`,
                  transition: ' background .2s ease-in',
                  ':hover': {
                    backgroundColor: (theme) => theme.color.darkGray
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: (theme) => isOpen ? theme.palette.primary.main : theme.color.gray,
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: (theme) => isOpen ? theme.palette.primary.main : theme.color.gray,
                  }}
                />
              </ListItem>
            </Link>
          </Box>
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