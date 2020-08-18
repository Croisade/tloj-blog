import React from 'react'
import Grid from '@material-ui/core/Grid'
import BlogHeader from '../blog/BlogHeader'
import { mainFeaturedPost, featuredPosts } from '../../data/data'

import FeaturedPost from '../blog/SubContent'

function Home() {
  return (
    <div>
      <BlogHeader post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </div>
  )
}

export default Home
