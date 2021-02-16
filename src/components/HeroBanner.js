import React from 'react'
import { makeStyles }  from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import BannerImage from '../assets/images/bannerImage.jpg'
import Button from '@material-ui/core/Button'

const styles = makeStyles((theme) => ({
    mainContainer:{
        height: '100vh',
        padding: 1,
        margin: 0,
    },
    heroBackground: {
      backgroundImage: `url(${BannerImage})`,
      backgroundPosition: 'centered',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',  
      color: 'white'
    },
    contactBtn: {
        ...theme.button
    },
    heroBannerText: {
        marginLeft: '1.5rem'
    }
}))



export default function HeroBanner(){
    const classes = styles()


const heroBanner = (
  <Grid
    className={classes.mainContainer}
    container
    alignItems="center"
    direction="row"
  >
    <Grid item className={classes.heroBackground}>
      <Typography
        className={classes.heroBannerText}
        variant="h5"
        align="left"
        style={{ marginTop: "1em" }}
      >
        Hello I'm
      </Typography>
      <Typography className={classes.heroBannerText} variant="h1" align="left">
        Evan Epperson
      </Typography>
      <Typography className={classes.heroBannerText} variant="h2" align="left">
        Building Apps for the Future and Now
      </Typography>
      <Button
        className={classes.contactBtn}
        href="mailto:eppersonevan@gmail.com"
      >
        Get In Touch
      </Button>
    </Grid>
  </Grid>
);

    return(
        <React.Fragment>
            {heroBanner}
        </React.Fragment>
    )
}