import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer.jsx'
import axios from "axios";
import { useState, useEffect } from 'react';


export default function CreateProductPage() {

	const [product, setProduct] = useState ([]); // Variabel state untuk menyimpan daftar produk.
	const [nameProduct, setNameProduct] = useState (""); // Variabel state untuk menyimpan nama produk.
	const [descriptionProduct, setDescriptionProduct] = useState ("");  // Variabel state untuk menyimpan deskripsi produk.
	const [priceProduct, setPriceProduct] = useState (""); // Variabel state untuk menyimpan harga produk.
  const [editId, setEditId] = useState(); // Variabel state untuk menyimpan ID produk yang sedang diedit 
	
  async function getProduct () {
		// untuk mengambil data produk dari API menggunakan axios.
      const response = await axios.get("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product");
      setProduct(response.data);
  }

	// useEffect berfungsi untuk menjalankan getProduct hanya sekali setelah komponen pertama kali dirender.digunakan untuk mengambil data awal yang dibutuhkan komponen untuk ditampilkan.
	useEffect(() => {
      getProduct()
    }, []);


		// Fungsi untuk Menambah Data Produk
    const addData = (e) => {
        e.preventDefault();
				// Fungsi ini mengecek terlebih dahulu apakah terdapat nilai pada state editId
        if (editId) {
					// Digunakan untuk mengirimkan request PUT ke API untuk memperbarui data produk yang sudah ada.
            axios.put("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product/" + editId, {
                nameProduct: nameProduct,
                descriptionProduct: descriptionProduct,
                priceProduct: priceProduct,
            })
						// setelah update data selesai, state editId di-set menjadi null untuk menandakan tidak ada produk yang sedang diedit.
            setEditId(null)
        } else {
					// Digunakan untuk mengirimkan request POST ke API untuk menambah data produk baru.
            axios.post("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product", {
                nameProduct: nameProduct,
                descriptionProduct: descriptionProduct,
                priceProduct: priceProduct,
            })

						// Setelah menambah data, state nameProduct, descriptionProduct, dan priceProduct di-set menjadi kosong untuk persiapan penambahan data baru selanjutnya.
            setNameProduct("")
            setDescriptionProduct("")
            setPriceProduct("")
        }
				
				// untuk memperbarui data produk yang ditampilkan di komponen React dengan data terbaru dari API.
            getProduct()
    }


		// Mendeklarasikan fungsi "deleteData" yang menerima parameter "id". Parameter ini mewakili "iD" dari produk yang ingin dihapus.
    const deleteData = (id) => {
			// Digunakan untuk mengirimkan request DELETE ke API untuk menghapus data produk.
        axios.delete("https://663b2a3dfee6744a6ea08fb2.mockapi.io/product/" + id)
    }


		// Mendeklarasikan fungsi editData yang menerima parameter id. Parameter ini mewakili ID dari produk yang ingin diedit.
    const editData = (id) => {

			// Baris ini menggunakan fungsi find pada array product untuk mencari produk yang memiliki ID sesuai dengan parameter id.
        const editproduct = product.find(p => p.id === id)

				// ika produk dengan ID yang sesuai ditemukan kode ini akan mengisi state terkait form edit
        setNameProduct(editproduct.nameProduct)
        setDescriptionProduct(editproduct.descriptionProduct)
        setPriceProduct(editproduct.priceProduct)

				// Baris ini mengisi state editId dengan nilai id produk yang sedang diedit.
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

										{/* Fungsi method map pada JavaScript adalah untuk membuat array baru */}
                    {product.map((item) => (
											// Digunakan untuk mengidentifikasi dan melacak perubahan pada data produk.
                        <tr key={item.id}>
                            <td>{item.nameProduct}</td> {/* Menampilkan nama produk. */}
                            <td>{item.descriptionProduct}</td> {/* Menampilkan deskripsi produk. */}
                            <td>{item.priceProduct}</td> {/* Menampilkan harga produk. */}
                            <td><img src={item.imageProduct} alt="" className=" w-20 h-20"/></td> {/* Menampilkan gambar produk dengan elemen <img>. */} 
                            <td>
														{/* Tombol "Delete" dengan event handler onClick yang memanggil fungsi deleteData(item.id)  */}
                            <button className="btn btn-link text-red-600" onClick={() => deleteData (item.id)}>Delete</button>
                            {/* Tombol "Edit" dengan event handler onClick yang memanggil fungsi editData(item.id). */}
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