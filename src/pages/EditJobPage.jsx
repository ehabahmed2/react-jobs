import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const EditJobPage = () => {
    {/*load job*/}
    const job = useLoaderData()

    const navigate = useNavigate()
    {/*add job's data into use stat*/}
    const [title, setTitle] = useState(job.title);
    const [company, setCompany] = useState(job.company.name);
    const [contactEmail, setCompanyEmail] = useState(job.company.contactEmail);
    const [location, setLocation] = useState(job.location);
    const [salary, setSalary] = useState(job.salary);
    const [type, setType] = useState(job.type);
    const [description, setDescription] = useState(job.description);

    {/*now post this new job to api*/}
    const updateJob = async (updatedJob) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        });
        if(!res.ok) {
            toast.error('Failed to update page!')
            return;
        }
        return;
    };

    {/*on submit, pass the new data to api to update*/}
    const submitform = (e)=> {
        e.preventDefault();
        const updatedJob = {
            id: job.id,
            title,
            type,
            description,
            location, 
            salary,
            company: {
                name: company,
                contactEmail: contactEmail,
            }
            
        }
        updateJob(updatedJob);
        toast.success('Job updated successfully!')
        return navigate('/jobs')
    };



  return (
    <div className="max-w-3xl mx-auto p-6 bg-neutral-light rounded-lg shadow-md my-5">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">Update Job Job</h1>
      <form className="space-y-4" onSubmit={submitform}>
        {/* Job Title */}
        <div>
          <label className="block text-neutral-dark mb-2">Job Title</label>
          <input
            type="text"
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter job title"
            required
            value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-neutral-dark mb-2">Company</label>
          <input
            type="text"
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter company name"
            required
            value={company}
          onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        {/* Company */}
        <div>
          <label className="block text-neutral-dark mb-2">Company Email</label>
          <input
            type="text"
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter company email address"
            required
            value={contactEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-neutral-dark mb-2">Location</label>
          <input
            type="text"
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter job location"
            required
            value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-neutral-dark mb-2">Salary</label>
          <input
            type="text"
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter salary"
            value={salary}
          onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-neutral-dark mb-2">Job Type</label>
          <select className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-neutral-dark mb-2">Description</label>
          <textarea
            className="w-full border border-neutral-dark rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter job description"
            rows="4"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand text-white py-3 rounded-lg hover:bg-brand-dark transition"
        >
          Add Job
        </button>
      </form>
    </div>
  )
}

export default EditJobPage