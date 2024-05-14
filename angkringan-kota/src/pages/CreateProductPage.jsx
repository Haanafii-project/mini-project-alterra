import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import { useState, useRef, useEffect } from 'react';
import kopi1 from '../images/kopi1.jpg';
import kopi2 from '../images/kopi2.jpg';
import kopi3 from '../images/kopi3.jpg';


export default function CreateProductPage() {
    const [listProduct, setListProduct] = useState([
        {
        nameProduct: "Latte",
        descriptionProduct: "Kopi",
        priceProduct: 10000,
        },
        {
        nameProduct: "Americcano",
        descriptionProduct: "Kopi",
        priceProduct: 15000,
        },
        {
        nameProduct: "Coffee Milk",
        descriptionProduct: "Kopi",
        priceProduct: 20000,
        },
    ]);

    const [nameProduct, setNameProduct] = useState ("");
    const [descriptionProduct, setDescriptionProduct] = useState ("");
    const [priceProduct, setPriceProduct] = useState ("");

    useEffect(() => {
        setListProduct(listProduct);
    }, [listProduct]);

    const addData = (e) => {
        e.preventDefault
        if (nameProduct === "" || descriptionProduct === "" || priceProduct === ""){
            alert("Semua data Harus diisi")
            return
        }

        const newData = {
            nameProduct: nameProduct,
            descriptionProduct: descriptionProduct,
            priceProduct: priceProduct,
        }
        setListProduct([...listProduct, newData]);
        setNameProduct("");
        setDescriptionProduct("");
        setPriceProduct("");
    }

    const deleteData = (nameProduct) => {
        const newData = listProduct.filter((item) => item.nameProduct !== nameProduct)

        setListProduct(newData);
    }


    return (
        <>
        <Header/>
        <h1 className="text-3xl text-center my-6">Create Product Form</h1>
        <div className="mb-10 flex flex-row text-left justify-center">
            <form>
                <div className="my-5">
                    <div>
                        <label htmlFor="">Product Name :</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            name="productName"
                            value={nameProduct}
                            onChange={(e) => setNameProduct(e.target.value)}
                        />
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <label htmlFor="">Description :</label>
                    </div>
                    <div>
                        <textarea
                            className="textarea textarea-bordered w-full max-w-xs"
                            placeholder="Description"
                            name="description"
                            value={descriptionProduct}
                            onChange={(e) => setDescriptionProduct(e.target.value)}
                            />
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <label htmlFor="">Product Price :</label>
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            name="productPrice"
                            value={priceProduct}
                            onChange={(e) => setPriceProduct(e.target.value)}
                            />
                    </div>
                </div>
                {/* <div className="my-5">
                    <label htmlFor="">Product Image :</label>
                    <input
                        type="file"
                        ref={imageProduct}
                        className="file-input file-input-bordered w-full max-w-xs"
                        // onChange={(e) => setProductImage(e.target.files[0])}
                        // required
                        />
                </div> */}
                <div className="my-5">
                    <button type="submit" className="btn" onClick={addData}> 
                        Submit
                    </button>
                </div>
            </form>
        </div>

        {/* List Product */}
        <h1 className="text-3xl text-center my-6">List Product</h1>
        <div className="overflow-x-auto px-24 mb-10">
            <table className="table border border-stone-600">
                <thead>
                    <tr className="bg-base-200">
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map((item) => (
                        <tr key={item.name}>
                            <td>{item.nameProduct}</td>
                            <td>{item.descriptionProduct}</td>
                            <td>{item.priceProduct}</td>
                            <td>image</td>
                            <td>
                            <button className="btn btn-link text-red-600" onClick={() => deleteData (item.nameProduct)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        <Footer/>
        </>
    )
}