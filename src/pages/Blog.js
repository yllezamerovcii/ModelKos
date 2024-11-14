import React from 'react';
import AllPartners from '../components/pages/AllPartners'; 
import Subscribe from '../components/pages/Subscribe'; 
import TheBlog from '../components/pages/TheBlog';
import BlogBanner from '../components/pages/BlogBanner';


const Blog = () => {
  return (
    <div>
        <BlogBanner />
        <TheBlog />
        <AllPartners />
        <Subscribe />
    </div>
  )
}

export default Blog
