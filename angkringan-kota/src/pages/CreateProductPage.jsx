import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import axios from "axios";
import { useState, useEffect } from 'react';


export default function CreateProductPage() {
    
    const [editId, setEditId] = useState();
    const [nameProduct, setNameProduct] = useState ("");
    const [descriptionProduct, setDescriptionProduct] = useState ("");
    const [priceProduct, setPriceProduct] = useState ("");
    const [product, setProduct] = useState ([]);
    const [image, setImage] = useState(null);
    const [response, setResponse] = useState();
    
    async function getProduct () {
        const response = await axios.get("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product");
        setProduct(response.data);
    }

    useEffect(() => {
        getProduct()
    }, []);
    console.log(product)

    const addData = (e) => {
        e.preventDefault();
        if (editId) {
            axios.put("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product/" + editId, {
                nameProduct: nameProduct,
                descriptionProduct: descriptionProduct,
                priceProduct: priceProduct,
            })
            setEditId(null)
        } else {
            axios.post("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product", {
                nameProduct: nameProduct,
                descriptionProduct: descriptionProduct,
                priceProduct: priceProduct,
            })
            setNameProduct("")
            setDescriptionProduct("")
            setPriceProduct("")
        }
        if (image) {
            fetch('https://663b2a3dfee6744a6ea08fb2.mockapi.io/product', {
                method: 'POST',
                body: JSON.stringify({ image }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setResponse(data);
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
            }
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
        
    //     reader.onloadend = () => {
    //       setImage(reader.result);
    //     };
    
    //     if (file) {
    //       reader.readAsDataURL(file);
    //     }
    //   };


    const deleteData = (id) => {
        axios.delete("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product/" + id)
        console.log("ppppp")
    }

    const editData = (id) => {
        const editproduct = product.find(p => p.id === id)
        setNameProduct(editproduct.nameProduct)
        setDescriptionProduct(editproduct.descriptionProduct)
        setPriceProduct(editproduct.priceProduct)
        setEditId(id) 
        console.log(editproduct) 
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
                            className="input input-bordered w-96"
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
                            className="textarea textarea-bordered w-96"
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
                            className="input input-bordered w-96"
                            name="productPrice"
                            value={priceProduct}
                            onChange={(e) => setPriceProduct(e.target.value)}
                            />
                    </div>
                </div>
                {/* <div className="my-5">
                    <div>
                        <label htmlFor="">Product Image :</label>
                    </div>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    <input
                        type="file"
                        className="file-input file-input-bordered w-96"
                        onChange={(e) => setProductImage(e.target.files[0])}
                        />
                </div> */}
                <div className="my-5">
                    <button type="submit" className="btn" onClick={addData}> 
                        Submit
                    </button>
                </div>
            </form>
        </div>
        {image && (
        <div>
          <h3>Preview</h3>
          <img src={image} alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {response && (
        <div>
          <h3>Response from MockAPI</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

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
                    {product.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nameProduct}</td>
                            <td>{item.descriptionProduct}</td>
                            <td>{item.priceProduct}</td>
                            <td><img src={item.imageProduct} alt="" className=" w-20 h-20"/></td>
                            <td>
                            <button className="btn btn-link text-red-600" onClick={() => deleteData (item.id)}>Delete</button>
                            <button className="btn btn-link text-red-600" onClick={() => editData (item.id)}>Edit</button>
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