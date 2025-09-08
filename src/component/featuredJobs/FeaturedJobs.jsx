import React from 'react'
import Job from '../job/Job'
import { useEffect, useState } from 'react'


function FeaturedJobs() {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mt-20">Featured Jobs</h2>
                <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto">Explore thousands of job opportunities with all the information you need. It's your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary mt-10">See All Jobs</button>
            </div>
        </div>
    )
}

export default FeaturedJobs
