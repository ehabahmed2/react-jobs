import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobsBtn = () => {
  return (
    <div>
        <Link
        to="/jobs"
        className="bg-neutral-dark text-white block w-fit px-6 py-3 rounded-lg my-5 mx-auto text-center text-xl hover:bg-brand-dark transistion duration-200"
        >
        Check all jobs
        </Link>

    </div>
  )
}

export default ViewAllJobsBtn