import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  icons: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginLeft: theme.spacing(2),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 1,
  },
  headerImg: {
    position: 'relative',
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(2),
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { sections, tlojHeader } = props

  return (

    <React.Fragment>
      <Toolbar>
        <Button color="inherit">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          The Life Of Jamal
        </Typography>
        <YouTubeIcon />
        <GitHubIcon />
        <FacebookIcon />
        <InstagramIcon />
      </Toolbar>
      <Divider />
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Grid container justify="center" alignItems="center">
        <img className={classes.headerImg} src={tlojHeader.image} alt={tlojHeader.imageText} />
      </Grid>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  tlojHeader: PropTypes.array,
}
