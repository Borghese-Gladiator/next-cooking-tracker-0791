import { Box } from "@mui/material";

const Content = ({ children }) => {
  return (
    <Box
      p={3}
      sx={{ backgroundColor: (theme) => theme.color.gray, }}
    >
      {children}
    </Box>
  );
}

export default Content;