import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

import img from '../../static/jamalfacecrop.jpeg'
import { homeLinks, techLinks } from '../../data/data'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 290,
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
    <Grid container spacing={1} className={classes.control}>
      {homeLinks.map(content => (
        <Grid item>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" paragraph align="center"> {content.title} </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default HeaderContent
