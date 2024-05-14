import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import kopi1 from "../images/kopi1.jpg"
import kopi2 from "../images/kopi2.jpg"
import kopi3 from "../images/kopi3.jpg"

export default function menuPage() {
    return (
        <>
        <Header/>
            {/* Menu Section Start */}
            <div className="my-5 flex flex-col" id='menu'>
              <div>
                <h1 className='text-3xl font-bold text-center text-stone-800'>Menu Kami</h1>
              </div>
              <div className='grid grid-cols-3 gap-3 my-5 items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={kopi1} alt="Shoes" className="rounded-xl" width={250}/>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Latte</h2>
                    <p>kopi yang dicampur dengan susu dan memiliki lapisan busa yang tipis di bagian atasnya.</p>
                    <div className="card-actions">
                      <button className="btn bg-stone-500 hover:bg-stone-600 text-white">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={kopi2} alt="Shoes" className="rounded-xl" width={270}/>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Americcano</h2>
                    <p>Amerikano adalah minuman kopi yang dibuat dengan mencampurkan satu seloki espresso dengan air panas.</p>
                    <div className="card-actions">
                      <button className="btn bg-stone-500 hover:bg-stone-600 text-white">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={kopi3} alt="Shoes" className="rounded-xl" width={225} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Coffee Milk</h2>
                    <p>minuman yang terbuat dari campuran kopi dan susu yang disajikan bersama mirip dengan susu coklat.</p>
                    <div className="card-actions">
                      <button className="btn bg-stone-500 hover:bg-stone-600 text-white" >Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu Section End */}
            <Footer/>
        </>
    )
}