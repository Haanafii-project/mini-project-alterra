import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios";
import { useState, useEffect } from 'react';

export default function menuPage() {
    const [product, setProduct] = useState ([]);


    async function getProduct () {
      const response = await axios.get("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product");
      setProduct(response.data);
    }

    useEffect(() => {
      getProduct()
    }, []);

    console.log(product)

    return (
        <>
        <Header/>
            {/* Menu Section Start */}
            <div className="my-5 flex flex-col" id='menu'>
              <div>
                <h1 className='text-3xl font-bold text-center text-stone-800'>Menu Kami</h1>
              </div>
              <div className='grid grid-cols-3 gap-3 my-5 items-center mx-5'>
              {product.map((item) => (
                        <div key={item.id}>
                          <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                              <img src={item.imageProduct} alt="Shoes" className="rounded-xl" width={250}/>
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{item.nameProduct}</h2>
                              <p>{item.descriptionProduct}</p>
                              <div className="card-actions">
                                <button className="btn bg-stone-500 hover:bg-stone-600 text-white">{item.priceProduct}</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))} 
                
              </div>
            </div>
            {/* Menu Section End */}
            <Footer/>
        </>
    )
}