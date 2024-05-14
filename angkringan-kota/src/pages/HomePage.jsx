import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function home() {
  return (
    <>
    <Header/>
      {/* Hero Section Start */}
      <div id='home' className="hero min-h-screen bg-base-100 mb-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-center text-stone-800">Halo Kawanku</h1>
            <p className="py-6">Mari duduk di angkringan kami <br />Duduk sejenak untuk menghilangkan keluh kesah </p>
            <Link to="/menu" className="btn bg-stone-500 hover:bg-stone-600 text-white">Lihat Menu</Link>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      <Footer/>
    </>
  )
}
