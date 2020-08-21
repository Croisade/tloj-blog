import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { homeLinks } from '../../data/data'

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
  console.log(homeLinks.links)

  return (
    <Grid container spacing={1} className={classes.control}>
      {homeLinks.map((content, index) => (
        <div key={index}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body2" paragraph align="center"> {content.title} </Typography>
            {homeLinks.content.map((c, i) => (
              <div key={i}>
                <Typography> {c.title} </Typography>
              </div>
            ))}
          </Paper>
        </div>
      ))}
    </Grid>
  )
}

export default HeaderContent
