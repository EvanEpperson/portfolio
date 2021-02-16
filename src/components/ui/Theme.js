import { createMuiTheme } from "@material-ui/core/styles";


const myBlue = "#00017C";
const myGreen = "#4EC274";

export default createMuiTheme({
  palette: {
    common: { blue: `${myBlue}`, green: `${myGreen}` },
    primary: { main: `${myBlue}` },
    secondary: { main: `${myGreen}` },
  },
  typography: {
    p: {},
    h1: {},
  },
});
