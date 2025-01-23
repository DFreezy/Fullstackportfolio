import React from 'react';
import '../index.css';

export default function About() {
  const workArr = [
    "UI/UX designer",
    "Frontend developer",
    "Copywriter",
    "Backend developer",
    "Fullstack developer"
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-12">About</h1>

      <div className='flex justify-center items-center h-screen bg-gray-300'>
        <img src="/images/Me.png" className='rounded-full w-48 h-48 border-4 border-blue-500 shadow-xl' />
      </div>

      <div className="flex justify-center items-center mt-8">
        <h1 className="text-3xl font-bold text-blue-500 text-center">Duwayne Frieslaar</h1>
      </div>

      <section className="download-cv my-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Download My CV</h2>
        <a 
          href="./Du-wayne Frieslaar.docx" 
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>
      </section>

      <div className='bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 py-12'>
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-4">My Roles:</h2>
          <ul className="list-disc list-inside space-y-2">
            {workArr.map((work, index) => (
              <li key={index} className="text-lg">{work}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center py-8'>
        <button className="border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105">
          Connect with Me
        </button>
      </div>
    </div>
  );
}
