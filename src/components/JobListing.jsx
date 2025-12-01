import React from 'react'
import { useState } from 'react'
import {FaMapMarked, FaMapMarker} from 'react-icons/fa'

const JobListing = ({job}) => {

  const [showFullDescription, setFullDescription] = useState(false);
  let description = job.description
  if(!showFullDescription) {
    description = description.substring(0, 90) +'...'
  }

  return (
    <div>
                    <h2 className="text-xl font-semibold text-neutral-dark mb-2">
                    {job.title}
                    </h2>
                    <p className="text-gray-800 transition duration-500 line-clamp-3">{description}</p>
                    <button
                      onClick={() => setFullDescription(prev => !prev)}
                      className="text-indigo-500 hover:text-indigo-600"
                    >
                      {showFullDescription ? 'show less' : 'show more'}
                    </button>
                  
                    <p className="text-gray-600 mb-1">
                    <span className="font-medium">{job.company.name}</span> <FaMapMarker className='inline mb-1 text-lg ml-2'/> {job.location}
                    </p>
                    <p className="text-gray-500 mb-4">
                    {job.salary} • <span className="capitalize">{job.type}</span>
                    </p>
                    <a href={`/jobs/${job.id}`} className="bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark transition">
                    Apply Now
                    </a>

      </div>
  )
}

export default JobListing