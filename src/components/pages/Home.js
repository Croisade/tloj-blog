import React from 'react'
import BlogHeader from '../blog/BlogHeader'
import { sections } from '../../data/data'

function Home() {
  return (
    <div>
      <BlogHeader sections={sections} />
    </div>
  )
}

export default Home
