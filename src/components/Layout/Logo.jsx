import { Typography } from "@mui/material";

export default function Logo() {
  return <Typography variant="h5" p={2} sx={{
    "color": (theme) => theme.palette.getContrastText("#191A24")
  }}>LOGO</Typography>
}
