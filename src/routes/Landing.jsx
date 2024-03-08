import React from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import HomePage from '../components/home/HomePage'
import Banner from '../components/home/Banner'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <HomePage />
        <Footer />
    </div>
  )
}

export default Landing