import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

import img from '../../static/jamalfacecrop.jpeg'
import { aboutContent } from '../../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
    flex: 1,
    align: 'center',
  },
  media: {
    height: 190,
    width: 140,
    margin: 'auto',
  },
  aboutText: {
    marginBottom: theme.spacing(0),
  },
  control: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
}))

function HeaderContent() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2} className={classes.control}>
          {aboutContent.map(content => (
            <Grid item>
              <Paper className={classes.paper}>
                <Typography component="h3" variant="h5" align="center"> {content.title} </Typography>
                <Typography variant="body2" paragraph align="center"> {content.description} </Typography>
              </Paper>
            </Grid>
          ))}
          <Grid item>
            <Paper className={classes.paper}>
              <CardMedia
                className={classes.media}
                image={img}
                title="placeholder"
              />
              <Typography variant="body2" paragraph align="center" className={classes.aboutText}> Male, 25 </Typography>
              <Typography variant="body2" paragraph align="center" className={classes.aboutText}> Nice to meet you </Typography>
              <Typography variant="body2" paragraph align="center"> Avid fitness junky and anime fanatic </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderContent
