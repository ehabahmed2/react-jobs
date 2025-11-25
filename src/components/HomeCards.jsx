import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'


// Generic wrapper that accepts children
const HomeCards = () => {
  return (
    <section>
        <div className="grid gap-6 m-3 max-w-3xl sm:grid-flow-col mx-auto my-6">
            <Card>
            <h2 className=' mb-2 text-xl font-extrabold'>For Developer</h2>
            <p className='mb-6'>Find suitalbe jobs for you</p>
            <Link to="/jobs" className='p-2 bg-brand-light hover:bg-neutral-dark rounded-md transition duration-200'>Find a Job</Link>
            </Card>
            <Card bg='bg-accent'>
            <h2 className=' mb-2 text-xl font-extrabold' >For Employers</h2>
            <p className='mb-6'>List your job to find developers</p>
            <a href="" className='p-2 bg-accent-dark hover:bg-neutral-dark  rounded-md transition duration-200'>List a Job</a>
            </Card>
        </div>
    </section>
  )
}

export default HomeCards
