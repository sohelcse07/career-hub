import React from 'react';

function Statistics() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Statistics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Total Jobs Applied</p>
          <h2 className="text-3xl font-extrabold text-blue-600 mt-2">24</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Remote Jobs</p>
          <h2 className="text-3xl font-extrabold text-green-600 mt-2">10</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Onsite Jobs</p>
          <h2 className="text-3xl font-extrabold text-purple-600 mt-2">14</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Pending Applications</p>
          <h2 className="text-3xl font-extrabold text-yellow-500 mt-2">5</h2>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Accepted Offers</p>
          <h2 className="text-3xl font-extrabold text-teal-600 mt-2">3</h2>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <p className="text-gray-500">Rejected Applications</p>
          <h2 className="text-3xl font-extrabold text-red-500 mt-2">2</h2>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
