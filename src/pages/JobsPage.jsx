import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {

  return (
    <section className='bg-neutral-light px-4 py-6'>
      <JobListings isHome={true}/>
    </section>
  )
}

export default JobsPage