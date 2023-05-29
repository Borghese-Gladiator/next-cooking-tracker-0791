import { createTheme } from "@mui/material";

const theme = {
  color: {
    black: '#000000',
    darkGray: '#333333',
    gray: '#90A4AE',
    lightGray: '#CFD8DC',
    light: '#ECEFF1',
    white: '#FFFFFF',
  },
  palette: {
    primary: {
      main: '#009490',
      light: '#2BB5B6',
    },
    secondary: {
      main: '#C64A9A',
    },
    background: {
      default: '#11111',
      paper: '#191A24',
      sidebar: '#0A090B',
    },
    link: {
      active: '#FAFAFF',
      inactive: '#A4A6B3',
      hover: '#1E7978',
    },
  },
}

export default createTheme(theme);
