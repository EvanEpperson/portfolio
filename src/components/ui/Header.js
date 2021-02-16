import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
// ==========
// MUI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import palette from './Theme'


const styles = makeStyles((theme) => ({
  toolBarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "4em"
  },
  logo: {
    marginLeft: '2rem',
    // height: '9em',
    width: '5rem'
  },
  tabContainer: {
    marginLeft: 'auto',
  }
}))


export default function Header(props) {
    const classes = styles()
    const theme = useTheme()

    const routes = [
      {  name: "Home", link: "/" },
      {  name: "About", link: "#about" },
      {  name: "Contact", link: "#contact" },
      {name: 'Experience', link: '#experience'}

    ];

    const tabs = (
      <React.Fragment>
        <div className={classes.tabContainer} >
          {routes.map((route, id) => {
            return(
            <Tab
              value={route.id}
              label={route.name}
              key={`${route}.${id}`}
              >{route.name} </Tab>
              
            )
          })}
        </div>
      </React.Fragment>
    )







  return (
    <React.Fragment>
      <AppBar position="fixed" color='primary'>
        <Toolbar disableGutters>
          <Button disableRipple >
            <img src={Logo} className={classes.logo} alt={'logo'} />
          </Button>
          {tabs}</Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} ></div>
    </React.Fragment>
  );
}
