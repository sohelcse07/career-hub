import React, { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json") // public folder e rakhle direct / diye fetch korte hobe
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <img
                src={job.logo}
                alt={job.company_name}
                className="h-12 mb-4"
              />
              <h2 className="text-xl font-semibold">{job.job_title}</h2>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-500">{job.location}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">
                  {job.remote_or_onsite}
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg">
                  {job.job_type}
                </span>
              </div>
              <p className="text-lg font-medium text-green-700 mt-4">
                💰 {job.salary}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
