import React from 'react'
import aboutimage from '../../assets/aboutimage.png'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'


const About = () => {
    
  return (
    <>
        <Navbar/>
        <div className="min-h-screen  flex flex-col items-center p-4 pt-20">
      <div className="max-w-5xl w-full  shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to our e-commerce store, your one-stop destination for quality products and exceptional customer service. We are passionate about bringing you a seamless online shopping experience, offering a wide range of products tailored to meet your every need.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our mission is to make shopping convenient and enjoyable. With a carefully curated selection of products, we strive to provide you with the best value for your money. From everyday essentials to unique finds, we have something for everyone.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Customer satisfaction is at the heart of everything we do. Our team is dedicated to ensuring that your shopping experience is smooth, secure, and hassle-free. We are constantly updating our inventory to bring you the latest and greatest products in the market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Shop With Us?</h2>
            <ul className="text-gray-600 text-lg space-y-2">
              <li>Extensive product selection</li>
              <li>Competitive pricing</li>
              <li>Fast and reliable shipping</li>
              <li>Secure payment options</li>
              <li>Exceptional customer support</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={aboutimage}
              alt="Happy customers shopping"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
