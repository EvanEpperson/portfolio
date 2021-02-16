import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Avatar from './../assets/images/avatar.jpg'
import  Typography  from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const styles = makeStyles((theme) => ({
    aboutMeBody: {
        ...theme.typography.body1,
        [theme.breakpoints.up('md')]: {
            maxWidth: "70ch",
        }

    },
    avatar:{
        maxWidth: '20rem',
        borderRadius: "50%"
    },
    aboutMeContainer: {
        padding: '2rem 2rem'
    }
}))

export default function About(){
    const classes = styles()
    const theme = useTheme()
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))


    return (
      <React.Fragment>
        s
        <Grid id='about'
        className = {classes.aboutMeContainer}
          container
          justify="space-around"
          allignItems="center"
          direction="row"
        >
          <Grid item>
            <Typography variant="h2" align={matchesXS ? "center" : "left"}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              align={matchesXS ? "center" : "left"}
              className={classes.aboutMeBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, id! Possimus odit vitae minima magni eius aliquid
              debitis adipisci quas reiciendis voluptatum, architecto omnis
              repellat minus voluptas. Quia, eum distinctio. Cumque sequi dolor
              repellat commodi perferendis sint natus ad iure obcaecati ducimus
              labore atque a repellendus temporibus aliquam rerum asperiores,
              nesciunt iste quisquam exercitationem! Eligendi quod temporibus
              eius. Deleniti, eius. Nemo itaque illo repudiandae, corporis
              voluptatem non nostrum quidem ipsum facere voluptate sit eaque
              laborum fugit quisquam commodi tempora harum earum cum
              necessitatibus quo, soluta autem? Quo dolorem molestias odit?
            </Typography>
          </Grid>
          <Grid item>
            <img src={Avatar} alt="Avatar" className={classes.avatar} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
}