import React from "react";
import Logo from "../../assets/images/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
// ==========
// MUI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import useMediaQuery from "@material-ui/core/useMediaQuery";


const styles = makeStyles((theme) => ({
  toolBarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "1.5em"
  },
  logo: {
    marginLeft: '2rem',
    // height: '9em',
    width: '5rem'
  },
  tabContainer: {
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      marginRight: '1rem'
    }
  },
  navIcons: {
    fontSize: '2rem'
  }
}))


export default function Header(props) {
    const classes = styles()
    const theme = useTheme()
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const routes = [
      { name: "Home", link: "/" },
      {
        name: "About",
        link: "#about",
        a: "https://www.linkedin.com/in/evanepperson/",
      },
      {
        name: "Contact",
        link: "#contact",
        a: "https://www.linkedin.com/in/evanepperson/",
      },
      {
        name: "Experience",
        link: "#experience",
        a: "https://github.com/EvanEpperson",
      },
    ];

    const tabs = (
      <React.Fragment>
        <div className={classes.tabContainer} >
          {routes.map((route, id) => {
            return(
            <Tab
              value={route.id}
              label={route.name}
              href={route.a}
              key={`${route}.${id}`}
              >{route.name} </Tab>
              
            )
          })}
        </div>
      </React.Fragment>
    )
    


    const icons = (
      <React.Fragment>
        <div className={classes.tabContainer}>
          <a
            rel="noopener noreferrer"
            href="https://github.com/EvanEpperson"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              // title="About Me"
              className={classes.navIcons}
              // alt={"About Me"}
              rel="noopener noreferrer"
            />
            <a
              rel="noopener noreferrer"
              href="https://github.com/EvanEpperson"
              target="_blank"
            >
              Link Here
            </a>
          </a>
        </div>
      </React.Fragment>
    );




  return (
    <React.Fragment>
      <AppBar position="fixed" color='primary'>
        <Toolbar disableGutters>
          <Button disableRipple >
            <img src={Logo} className={classes.logo} alt={'logo'} />
          </Button>
          {matchesXS ? icons: tabs} </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} ></div>
    </React.Fragment>
  );
}
