import React from 'react'
import '../index.css'

const Intro = () => {
    return (
        <div>
        <div className='flex justify-center items-center h-screen space-around bg-gray-300'>
        <img src="/images/Me.png" className='rounded-full w-48 h-48 mt-8 mb-4 px-6 py-2' />
        <h1 className="text-4xl font-bold text-center text-blue-500 typing-animation mt-8 mb-4 px-6 py-2">Duwayne Frieslaar</h1>
        </div>
        <div className='bg-gray-500 flex justify-center items-center space-around'>
       <button className='border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 focus:ring-2 focus:ring-blue-300'>About me</button>
       <button className='border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 focus:ring-2 focus:ring-blue-300'>Projects</button>
       <button className='border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 focus:ring-2 focus:ring-blue-300'>Awards and certificate</button>
        </div>
        </div>
    )
}

export default Intro;