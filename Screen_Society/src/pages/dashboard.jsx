// import React from "react";

const Dashboard = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* 🎬 New Trailers Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">New trailers</h2>
                <span className="text-sm text-gray-400">
                  Sort By: <span className="text-white">Today</span>
                </span>
              </div>
  
              <div className="space-y-4">
                {/* Trailer 1 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/RrNJ5zKLAJILmBNYEH4K6EmR2Y2J7TVzfVfot3V9MSk.jpg"
                    alt="Bheeshma Parvam"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">Bheeshma Parvam</h3>
                      <span className="text-sm bg-gray-700 px-2 py-1 rounded">02:59</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">2hrs ago</span>
                      <span className="text-sm text-gray-400">2.3M</span>
                    </div>
                  </div>
                </div>
  
                {/* Trailer 2 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/jPPA6i0xWTGQgiUjpocNs9HbyCa4K9XMyM_WgMqF7Ng.jpg"
                    alt="Black Panther 2"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">Black Panther 2</h3>
                      <span className="text-sm bg-gray-700 px-2 py-1 rounded">01:29</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">3hrs ago</span>
                      <span className="text-sm text-gray-400">1.1M</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Favorite Genres */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Favourite genres</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full">Action</span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full">Western</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full">Adventures</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full">Drama</span>
                  <span className="bg-blue-400 text-white px-3 py-1 rounded-full">Sci-Fi</span>
                  <button className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full">
                    <i className="fas fa-plus mr-2"></i> Add your favourite genres
                  </button>
                </div>
              </div>
            </div>
  
            {/* 🎥 Continue Watching Section */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Continue Watching</h2>
                <span className="text-sm text-gray-400">4 Movies</span>
              </div>
  
              <div className="relative bg-gray-800 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://storage.googleapis.com/a1aa/image/SsvyT12bdTVzl_oRR53L6TIUpK_-e6p8tRMoHx_9lg4.jpg"
                  alt="The Outpost"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <button className="bg-orange-600 text-white px-3 py-1 rounded-full">Watch Now</button>
                  </div>
                </div>
              </div>
  
              {/* Trending Movies */}
              <div className="flex justify-between items-center mt-8 mb-4">
                <h2 className="text-xl font-bold">Popular Movies 2021</h2>
                <span className="text-sm text-gray-400">All movies</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Movie 1 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/_9I4Fgv593LMrQe5bkxywF0Yij-JslTiKhX299h7vqM.jpg"
                    alt="Nomadland"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold">Nomadland</h3>
                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">4.8</span>
                  </div>
                </div>
  
                {/* Movie 2 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/E8j-SK8TiRlhZQzIgCygroh-blJNXURxY5HziVyuRsc.jpg"
                    alt="Space sweepers"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold">Space sweepers</h3>
                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">4.5</span>
                  </div>
                </div>
  
                {/* Movie 3 */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/E_kv4tQh0mGjPrxHNt9SZ_BZ6frixVAMOQhtZ37_xHY.jpg"
                    alt="The suicide squad"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold">The Suicide Squad</h3>
                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">4.1</span>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  