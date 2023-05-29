import FastFoodIcon from '@mui/icons-material/Fastfood';
import { Box, ListItem, ListItemIcon, ListItemText, Link as MuiLink, Paper } from '@mui/material';
import { startCase } from 'lodash';
import NextLink from 'next/link';
import Logo from './Logo';
import { getTextFromLink } from './utils';


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

// Link code from: https://gist.github.com/kachar/028b6994eb6b160e2475c1bb03e33e6a
const Link = (props) => {
  return <MuiLink component={NextLink} {...props} />
}

const Sidebar = ({ pageTitle }) => {
  return (
    <Paper
      square={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
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

export default Sidebar;