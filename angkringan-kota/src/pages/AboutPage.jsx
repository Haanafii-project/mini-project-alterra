import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import imagePic from '../images/aboutImage.jpg'

export default function aboutPage() {
    return (
        <>
            <Header/>
            {/* About Section Start */}
            <div id='about' className=" mt-10">
                <div className='text-center'>
                <h1 className='text-3xl font-bold text-center text-stone-800'>Tentang Kami</h1>
                </div>
                <div className="hero mb-10 mt-10 bg-base-100">
                    <div className="hero-content flex-row gap-10">
                        <div className='text-left'>
                            <h1 className="text-5xl font-bold">Apa Cerita ? <br />Duduklah dulu sini</h1>
                            <p className="py-6"></p>
                        </div>
                        <div className="justify-center">
                            <img src={imagePic} className="justify-center max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section end */}
            <Footer/>
        </>
    )
}