import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function ShortUrl() {

    const [long_url, setLongUrl] = useState('')
    const [provider, setProvider] = useState('')
    const [shortenUrl, setShortenUrl] = useState('')


    const postData = (e) => {
         e.preventDefault();
         Axios.post('http://localhost:8000/api/shortlinks',{
                 url : long_url,
                 provider : provider
                 })

                 .then(res => {
                    if(res.status === 201){
                        setShortenUrl(res.data.link)
                    }
                    else{
                        setShortenUrl(res.data.data.url)
                    }
                });
             }

 return (
    <div className="flex flex-col h-screen justify-center items-center">
    <form className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <h2 className="text-4xl text-white font-bold text-center">URL SHORTENER</h2>
        <div className="flex flex-col text-gray-400 py-2">
            <label>Long Url</label>
            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
             type="text" 
             value={long_url} 
             onChange={(e) => setLongUrl(e.target.value)} />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
            <label>Provider</label>
            <input className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
             type="text"
             value={provider}
             onChange={(e) => setProvider(e.target.value)} />
        </div>
        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" 
        onClick={postData}>
        Shorten Url
        </button>
        <div className="flex flex-col text-gray-400 py-2">
            <label>Shortened URL is:</label>
            <input className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
             type="text"
             disabled={true}
             value={shortenUrl} />
        </div>
    </form>
  </div>
  )
}
