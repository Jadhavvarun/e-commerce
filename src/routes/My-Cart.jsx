import React from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import MyCart from '../components/cart/MyCart'

const Mycart = () => {
  return (
    <div>
        <Navbar />
        <MyCart />
        <Footer />
    </div>
  )
}

export default Mycart