import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#8A2BE2",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  }
});

theme = responsiveFontSizes(theme);

export default theme