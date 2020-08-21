import React from 'react'
import Grid from '@material-ui/core/Grid'
import BlogHeader from '../blog/BlogHeader'
import { mainFeaturedPost, featuredPosts, aboutContent } from '../../data/data'

import FeaturedPost from '../blog/SubContent'
import AboutContent from '../blog/HeaderContent'
import HomeLinks from '../blog/HomeLinks'

function Home() {
  return (
    <div>
      <BlogHeader post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <AboutContent aboutContent={aboutContent} />
      <HomeLinks />
    </div>
  )
}

export default Home
