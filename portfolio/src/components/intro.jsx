import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Intro = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 flex flex-col justify-center items-center space-y-8">
            <h1 className="text-5xl font-extrabold text-white text-center">Welcome to My Portfolio</h1>
            <div className="space-y-4">
                {/* About Me Button */}
                <Link to="/pages/about">
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 focus:ring-2 focus:ring-blue-300">
                        About Me
                    </button>
                </Link>
                
                {/* Projects Button */}
                <Link to="/pages/projects">
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 focus:ring-2 focus:ring-blue-300">
                        Projects
                    </button>
                </Link>

                {/* Awards and Certificates Button */}
                <Link to="/pages/certificates">
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 focus:ring-2 focus:ring-blue-300">
                        Awards and Certificates
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Intro;
