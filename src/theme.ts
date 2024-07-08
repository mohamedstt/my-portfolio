import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#9400D3",
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Montserrat',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Montserrat',
    },
    h2: {
      fontFamily: 'Montserrat',
    },
    body1: {
      fontFamily: 'Roboto',
    },
    body2: {
      fontFamily: 'Roboto',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme