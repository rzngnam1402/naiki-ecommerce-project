import React from 'react'
import Banner from '../components/banner/banner'
import FeaturedSneaker from '../components/featured-sneaker/featured-sneaker'
import HeroContent from '../components/hero-content/hero-content'
import Preview from '../components/preview/preview'

const HomePage = () => {
  return (
    <>
      <HeroContent />
      <Banner />
      <FeaturedSneaker />
      <Preview />
    </>

  )
}

export default HomePage