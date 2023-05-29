import { Box } from "@mui/material";
import DarkModeToggle from "@/components/DarkModeToggle";

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

export default Nav;