import React from 'react'
import Jobs from '../assets/jobs.json'
import JobListing from './JobListing'
import ViewAllJobsBtn from './ViewAllJobsBtn'

const JobListings = ({isHome=false}) => {
    const jobListings = isHome ? Jobs : Jobs.slice(0,3);
    {/* to get only 3 of most recent jobs */}
  return (
    <section className="py-10 bg-neutral px-5">
      <h1 className="text-3xl font-bold mb-6">Latest Job Listings</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {jobListings.map((job) => (
                <div className="bg-white py-5 rounded-md px-3 shadow-md 
                        hover:shadow-xl hover:-translate-y-1 
                        transition transform duration-200 ease-in-out"
                        key={job.id}>
                <JobListing job={job} />
                </div>
                ))}
        </div>


        {isHome? '' : <ViewAllJobsBtn />}
        
    </section>
  )
}

export default JobListings