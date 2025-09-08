import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';

function JobDetails() {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idd = parseInt(id);
    const job = jobs.find(job => job.id === idd);

    const handleApplyJob = () => {
        saveJobApplication(idd);
        toast.success('Job Applied Successfully!');
    }
    return (
        <div>
            <h1 className="text-4xl text-center font-bold text-gray-800 my-30 bg-blue-100 p-10 rounded-2xl">Job Details</h1>

            <div className='grid md:grid-cols-4'>
             
                <div className='md:col-span-3 p-5'>

                    <div className='text-2xl flex '><h2 className='font-semibold'>Job Details of :  </h2><h2>{job.job_title}</h2></div>
                    <div className='flex text-xl'><p className='font-semibold mb-5'>Company : </p><p className='text-gray-800'>{job.company_name}</p></div>
                    <p><span className='font-bold'>Job Description:</span> <span className='text-sm sm:text-base text-gray-700'>{job.job_description}</span> </p>
                    <p><span className='font-bold'>Job Responsibility:</span> <span className='text-sm sm:text-base text-gray-700'>{job.job_responsibility}</span></p>
                    <p><span className='font-bold'>Educational Requirements:</span> <br /> <span className='text-sm sm:text-base text-gray-700'>{job.educational_requirements}</span></p>
                    <p><span className='font-bold'>Experiences:</span> <br /> <span className='text-sm sm:text-base text-gray-700'>{job.experiences}</span> </p>
                </div>
                <div>
                    <div className='bg-blue-50 p-5 md:col-span-1 rounded-xl '>
                        <h2 className="text-2xl">Job Details</h2>
                    <hr className='my-4' />
                    <p className='mb-4'><span className='font-bold'>Salary:</span> {job.salary}</p>
                    <p className='mb-4'><span className='font-bold'>Job Title:</span> {job.job_title}</p>
                    <h2 className="text-2xl mb-4">Contact Information</h2>
                    <hr className='my-4' />
                    <p className='mb-4'><span className='font-bold'>Phone:</span> {job.contact_information.phone}</p>
                    <p className='mb-4'><span className='font-bold'>Email:</span> {job.contact_information.email}</p>
                    <p className='mb-4'><span className='font-bold'>Address:</span> {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className='w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all mt-4'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default JobDetails
