import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-[75vh] bg-white flex justify-center items-center px-4 sm:px-8">
          {/* Main Container */}
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between lg:min-h-[75vh]">
            
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:min-h-[75vh] flex flex-col justify-center">
              <h1 className=" text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Create and sell custom products
              </h1>
              <ul className="text-lg text-gray-700 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> 100% Free to use
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> 900+ High-Quality Products
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Largest global print network
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-600">
                  Start for free
                </button>
                <button className="mt-4 sm:mt-0 flex items-center justify-center px-6 py-3 text-lg border border-gray-300 rounded-lg hover:bg-gray-100">
                  <span className="mr-2">▶</span> How it works?
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Trusted by over 8M sellers around the world
              </p>
            </div>
    
            <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Product mockup"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      );
    }

export default HomePage;
