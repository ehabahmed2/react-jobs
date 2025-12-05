import React from 'react'
import JobListings from '../components/JobListings'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa'




const JobsPage = () => {




  

  return (
    <section className='bg-neutral-light px-4 py-6'>
          <Link
          to="/"
          className="text-brand hover:text-brand-dark font-medium mb-5 block"
        >
          <FaArrowAltCircleLeft className='inline'/> Back
        </Link>
      <JobListings isHome={true}/>
    </section>
  )
}

export default JobsPage