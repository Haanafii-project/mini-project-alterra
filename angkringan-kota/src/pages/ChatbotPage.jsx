import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react";

export default function chatbotPage() {

    const [userInput, setuserInput] = useState(0)
    const [respond, setRespond] = useState()
    // const [response, setResponse] = useState()

    function handleChanges(data) {
        console.log(data.target.value)
        setuserInput(data.target.value)
    }

    const API_KEY = 'sk-proj-I8gY7bR1k1WP7wab2GVxT3BlbkFJ5uXNr3sUOMOVxPFqcynh';

    async function handleClick (e) {
        console.log(userInput)
      //menyambungkan ke Open ai dan memasukkan prompt
        e.preventDefault();
        const promptAwal = 'kamu adalah seorang customer service yang bekerja di sebuah warung kopi dan kamu hanya menjawab pertanyaan tentang makanan dan minuman';

        // ini adalah cara setting open ai
        const APIBody = {
        model: 'gpt-4',
        messages: [ { role: 'user', content: `${promptAwal} + ${userInput}` } ]
        };

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_KEY
            },
            body: JSON.stringify(APIBody)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await response.json();
        console.log(data);
        setRespond(data.choices[0].message.content);
        } catch (error) {
        console.error('Error:', error);
        }
    }

    return (
        <>
        <Header/>
        <div className="w-1/2 mx-auto mt-20">
            <h1 className="font-bold text-3xl my-10">Tanyakan Apapun seputar makanan ke AI</h1>
            <textarea onChange={(data) => {handleChanges(data)}} className="my-3 p-2 rounded-xl border border-stone-500" name="command" id="command" cols={75} rows={5} placeholder="Berapa harga secangkir kopi di indonesia ?"></textarea>
            <div className="">
                <button onClick={handleClick} className="mx-2 rounded-lg bg-stone-600 text-white p-3" type="sumbit">Submit Text</button>
            </div>
            <div className="my-4">
                <p className="font-bold mt-10 mb-2">Jawaban: {respond}</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}