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
    body1: {
      maxWidth: '45ch'
    }
  },
  button: {
    marginLeft: '2.5rem',
    backgroundColor: myGreen,
    color: 'white',
    borderRadius: '35px',
    height: '30px',
    padding: '10px',
    fontSize: '1rem',
  }
});
