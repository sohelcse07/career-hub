import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStorageJobApplication, removeJobApplication } from '../../utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppliedJobs() {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === 'All') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'Remote') {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Remote'
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === 'Onsite') {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === 'Onsite'
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  // ❌ Remove job handler (UI + localStorage + Toast)
  const handleRemoveJob = (id) => {
    removeJobApplication(id); // localStorage থেকে remove
    const updatedJobs = appliedJobs.filter((job) => job.id !== id);
    setAppliedJobs(updatedJobs);
    setDisplayJobs(updatedJobs);

    // ✅ Toast message
    toast.success("Job removed successfully!");
  };

  useEffect(() => {
    const storedJobIds = getStorageJobApplication();
    if (jobs.length > 0) {
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Jobs I Applied: {appliedJobs.length}
        </h2>

        <details className="dropdown">
          <summary className="btn btn-sm">Filter</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
            <li onClick={() => handleJobFilter('All')}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter('Remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter('Onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      {displayJobs.length === 0 ? (
        <p className="text-center text-gray-500">No applied jobs found.</p>
      ) : (
        <div className="space-y-4">
          {displayJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between border rounded-xl p-5 shadow hover:shadow-md transition"
            >
              {/* left side */}
              <div className="flex items-center gap-4">
                <img
                  src={job.logo}
                  alt={job.company_name}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{job.job_title}</h3>
                  <p className="text-gray-600">{job.company_name}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">
                      {job.remote_or_onsite}
                    </span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-xs">
                      {job.job_type}
                    </span>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="text-right">
                <p className="text-green-700 font-medium">💰 {job.salary}</p>
                <button
                  onClick={() => handleRemoveJob(job.id)}
                  className="btn btn-sm mt-2 bg-red-100 text-red-600 hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default AppliedJobs;
