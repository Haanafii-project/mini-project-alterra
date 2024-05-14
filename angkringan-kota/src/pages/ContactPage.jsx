import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function contactPage() {
    return (
        <>
        <Header/>
        {/* Contact Section Start */}
        <div className="container mx-auto px-4 py-12" id='contact'>
            <h2 className="text-3xl font-bold text-center text-stone-800">Contact Us</h2>
            <div className="flex flex-row justify-center gap-10 my-10">
                <div className='basis-1/4 items-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.951310471599!2d98.67088427364139!3d3.5986308963755045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131004d4506bf%3A0x79ab49ba2f5d3565!2sAngsa%20Neduh%20Angkringan%20Nusa%20Dua%20Heritage!5e0!3m2!1sid!2sid!4v1715354732261!5m2!1sid!2sid" className='border-none'  width={550} height={470} allowFullScreen=""  loading="lazy"  referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <div className='basis-1/4'>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold text-left">Full Name:</label>
                            <input type="text" id="name" name="name" className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold text-left"> Email Address:</label>
                            <input type="email" id="email" name="email" className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold text-left">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold text-left">Message:</label>
                            <textarea id="message" name="message" rows={4} className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={""} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {/* Contact Section End */}
        <Footer/>
        </>
    )
}