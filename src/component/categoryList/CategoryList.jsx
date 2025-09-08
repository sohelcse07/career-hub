import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";

function CategoryList() {
    return (
        <div className="px-4 md:px-10">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold">
                    Job Category List
                </h2>
                <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
                    Explore thousands of job opportunities with all the information you need. It's your future
                </p>
            </div>

            {/* Cards container */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {/* Card 1 */}
                <div className="bg-purple-50 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-lg transition duration-300 w-[250px]">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-4 text-3xl">
                        <MdOutlineAccountBalanceWallet />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Account & Finance
                    </h3>
                    <p className="text-gray-600 text-sm">300 Jobs Available</p>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-50 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-lg transition duration-300 w-[250px]">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-4 text-3xl">
                        <HiOutlineLightBulb />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Creative Design
                    </h3>
                    <p className="text-gray-600 text-sm">100+ Jobs Available</p>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-50 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-lg transition duration-300 w-[250px]">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-4 text-3xl">
                        <SiGooglemarketingplatform />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Marketing & Sales
                    </h3>
                    <p className="text-gray-600 text-sm">150 Jobs Available</p>
                </div>

                {/* Card 4 */}
                <div className="bg-purple-50 shadow-md rounded-2xl p-6 flex flex-col hover:shadow-lg transition duration-300 w-[250px]">
                    <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl mb-4 text-3xl">
                        <GiCircuitry />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Engineering Job
                    </h3>
                    <p className="text-gray-600 text-sm">224 Jobs Available</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryList
