import React from 'react'
import JobListing from './JobListing'
import ViewAllJobsBtn from './ViewAllJobsBtn'
import {useState, useEffect} from  'react'
import Spinner from './Spinner'

const JobListings = ({isHome=false}) => {
  
    {/* fetch the data */}

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const  fetchJobs = async ()=>{
        try {
          const res = await fetch('/api/jobs');
          const data = await res.json();
          setJobs(isHome ? data: data.slice(0, 3));
        } catch (error) {
          console.log('error fetching data', error)
        } finally {
          setLoading(false)
        } 
      }
      fetchJobs();
    }, 
  [])

  return (
    <section className="py-10 bg-neutral px-5">
      <h1 className="text-3xl font-bold mb-6">Latest Job Listings</h1>

            {loading ? (<Spinner />) : 
            <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {jobs.map((job) => (
                <div className="bg-white py-5 rounded-md px-3 shadow-md 
                        hover:shadow-xl hover:-translate-y-1 
                        transition transform duration-200 ease-in-out"
                        key={job.id}>
                <JobListing job={job} />
                </div>
                ))}
                </div>

                </>
                
            }

        {isHome ? '' : <ViewAllJobsBtn />}
        
    </section>
  )
}

export default JobListings