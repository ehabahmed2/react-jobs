import React from 'react'
import { useLoaderData, useNavigate, useParams} from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import ConfirmAction from '../components/ConfirmAction';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const JobPage = () => {
    const job = useLoaderData();
    const navigate = useNavigate()
    const {id} = useParams()
    const [showConfirm, setShowConfirm] = useState(false)
    

    {/*delete job*/}
    const deleteJob = (id) => {
      {/*if user confirmed -- delete it*/}
      const confirmDelete = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
          method: 'DELETE',
        });
        return;

      }
      confirmDelete(id)
      toast.success('Job deleted successfully!')
      return navigate('/jobs')

    }
    


  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-light rounded-lg shadow-xl my-5">
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
      <section className="grid grid-cols-70/30 gap-5 mb-6">
        <div>
          <p className="text-lg"><span className="font-semibold">Company:</span> {job.company.name}</p>
          <p className="text-lg"><span className="font-semibold">Location:</span> {job.location}</p>
          <p className="text-lg"><span className="font-semibold">Salary:</span> {job.salary}</p>
          <p className="text-lg"><span className="font-semibold">Type:</span> {job.type}</p>
          <p className="text-lg"><span className="font-semibold">Contact email:</span> {job.company.contactEmail}</p>
        </div>
        <div className="flex flex-col items-end">
          <button className="bg-brand w-20 text-sm py-2 px-1 text-white md:px-4 md:py-2 rounded-lg  md:w-32 md:text-lg hover:bg-brand-dark transition mb-5">
            Apply Now
          </button>
          <Link to={`/edit-job/${job.id}`}
          className="bg-neutral-700 w-20 text-sm py-2 px-1 text-white md:px-4 md:py-2 md:w-32 md:text-lg rounded-lg hover:bg-neutral-dark transition mb-5 text-center">
            Edit Job
          </Link> 
          <button onClick={()=> setShowConfirm(true)} 
          className="bg-accent w-20 py-2 px-1 text-sm text-white md:px-4 md:py-2 md:w-32 md:text-lg rounded-lg hover:bg-accent-dark transition ">
            Delete Job
          </button>
          {/*confirm if use wants to cancel it first*/}
          
          {showConfirm && (
            <ConfirmAction
              message="Are you sure you want to delete this job?"
              onConfirm={() => deleteJob(id)}
              onCancel={() => setShowConfirm(false)}
            />
          )}

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
