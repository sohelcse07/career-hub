import React from 'react'
import Me from '../../src/assets/Me.png'

function Banner() {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center p-6 md:p-10 rounded-lg mb-10'>
            {/* Left side text */}
            <div className='text-center md:text-left mt-5 md:mt-0'>
                <div className='mb-5'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                        One Step <br className='hidden md:block' /> Closer To Your
                    </h1>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800'>
                        Dream Job
                    </h1>
                </div>
                <div>
                    <span className='text-sm sm:text-base text-gray-700'>
                        Explore thousands of job opportunities with all the <br className='hidden sm:block' /> 
                        information you need. It's your future. Come find it. <br className='hidden sm:block' />
                        Manage all your job applications from start to finish.
                    </span>
                </div>
                <div className='mt-5'>
                    <button className="btn btn-primary px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Right side image */}
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={Me} alt="Banner" className='max-w-[300px] sm:max-w-[400px] md:max-w-full' />
            </div>
        </div>
    )
}

export default Banner
