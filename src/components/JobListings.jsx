import React from 'react'
import Jobs from '../assets/jobs.json'
import JobListing from './JobListing'
const JobListings = () => {
    const recentJobs = Jobs.slice(0,3)
    {/* to get only 3 of most recent jobs */}
  return (
    <section className="py-10 bg-neutral px-5">
      <h1 className="text-3xl font-bold mb-6">Latest Job Listings</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {recentJobs.map((job) => (
                <div className="bg-white py-5 rounded-md px-3 shadow-md 
                        hover:shadow-xl hover:-translate-y-1 
                        transition transform duration-200 ease-in-out"
                        key={job.id}>
                <JobListing job={job} />
                </div>
                ))}
        </div>



        <a
        href="/jobs"
        className="bg-neutral-dark text-white block w-fit px-6 py-3 rounded-lg my-5 mx-auto text-center text-xl hover:bg-brand-dark transistion duration-200"
        >
        Check all jobs
        </a>

    </section>
  )
}

export default JobListings