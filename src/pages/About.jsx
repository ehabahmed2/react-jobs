import React from 'react'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-neutral-light rounded-lg shadow-md my-10">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">About This Project</h1>
      <p className="text-lg text-neutral-dark mb-4 leading-relaxed">
        Welcome! This project is built using <span className="font-semibold text-brand">React.js </span> 
        and styled with <span className="font-semibold text-brand">TailwindCSS</span>. 
        It’s part of my journey to practice modern front-end development and create useful tools.
      </p>
      <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
        The goal of this app is to help users find job opportunities easily. 
        You can browse jobs, view details, and even add new job listings. 
        It’s designed to be simple, responsive, and user-friendly.
      </p>

      <div className="bg-brand-light p-6 rounded-lg text-white mb-6">
        <h2 className="text-2xl font-bold mb-2">Why I Built This?</h2>
        <p>
          To improve my React skills and provide a helpful resource for job seekers. 
          Practicing with real-world features like routing, API integration, and state management 
          makes learning more effective.
        </p>
      </div>

      <div className="flex justify-center ">
        <Link to="/jobs" className='bg-accent-dark text-white hover:bg-accent rounded-lg py-2 px-4'>
         Explore Jobs
        </Link>
         </div>
        
    </div>

  )
}

export default About

