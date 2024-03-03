import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import PostSection from './PostSection'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <PostSection title="Read More" />
        <Footer/>
    </>
  )
}

export default HomePage