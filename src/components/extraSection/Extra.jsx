import React from 'react';

const Extra = () => {
    return (
        <div className='bg-gray-200'>
             <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          How It Works
        </h2>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-full border border-green-700 grid place-items-center text-green-700 text-2xl">
              🌱
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Post Crops</h3>
            <p className="text-gray-600">Post what they are growing or selling</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-full border border-green-700 grid place-items-center text-green-700 text-2xl">
              🔍
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Browse Crops</h3>
            <p className="text-gray-600">Browse others crops posts</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-full border border-green-700 grid place-items-center text-green-700 text-2xl">
              🤝
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Connect & Collaborate</h3>
            <p className="text-gray-600">Show interest to connect and collaborate</p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Extra;
