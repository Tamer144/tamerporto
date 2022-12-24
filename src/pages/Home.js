import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CardsHolder from '../components/CardsHolder'
import CardsHolder2 from '../components/CardsHolder2'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SocialMediaCard from '../components/SocialMediaCard'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CardsHolder/>
      <CardsHolder2/>
      <Contact/>
      <SocialMediaCard/>
      <Footer/>
    </div>
  )
}

export default Home
