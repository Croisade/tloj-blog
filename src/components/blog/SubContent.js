import React from 'react'
import Grid from '@material-ui/core/Grid'
import PostCard from './PostCard'

function HeaderContent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <PostCard avatar="https://yt3.ggpht.com/-8Pn69tUxfyM/AAAAAAAAAAI/AAAAAAAAAAA/fNpDNlCck_M/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg" blogPicture="https://www.personal.psu.edu/jyc5774/jpg.jpg" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PostCard avatar="https://yt3.ggpht.com/-8Pn69tUxfyM/AAAAAAAAAAI/AAAAAAAAAAA/fNpDNlCck_M/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg" blogPicture="https://www.personal.psu.edu/jyc5774/jpg.jpg" />
      </Grid>


    </Grid>
  )
}

export default HeaderContent
