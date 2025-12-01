import React from 'react'
import { useLoaderData} from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';


const JobPage = () => {
    const job = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-light rounded-lg shadow-xl">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-brand-dark">{job.title}</h1>
        <button
          onClick={() => window.history.back()}
          className="text-brand hover:text-brand-dark font-medium"
        >
          <FaArrowAltCircleLeft className='inline'/> Back
        </button>
      </header>

      {/* Job Info */}
      <section className="grid grid-cols-70/30 gap-6 mb-6">
        <div>
          <p className="text-lg"><span className="font-semibold">Company:</span> {job.company.name}</p>
          <p className="text-lg"><span className="font-semibold">Location:</span> {job.location}</p>
          <p className="text-lg"><span className="font-semibold">Salary:</span> {job.salary}</p>
          <p className="text-lg"><span className="font-semibold">Type:</span> {job.type}</p>
          <p className="text-lg"><span className="font-semibold">Contact email:</span> {job.company.contactEmail}</p>
        </div>
        <div className="flex flex-col items-end">
          <button className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition">
            Apply Now
          </button>
        </div>
      </section>

      {/* Description */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Job Description</h2>
        <p className="text-neutral-dark leading-relaxed">{job.description}</p>
      </section>
    </div>
  )
  
};

const jobLoader = async ({params}) => {
    try {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data
    } catch (error){
        console.log('error', error)
    }
    
};


export {JobPage as default, jobLoader}
