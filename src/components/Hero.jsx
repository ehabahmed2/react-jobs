

import heroImage from '../assets/images/hero.png'
import { Link } from 'react-router-dom'

function Hero ({heroTitle ='Find Your Dream Job', heroSubtitle ='Explore thousands of opportunities tailored to your skills and interests.'}) {

    return (
    <section className="bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
        
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-6">
            {heroTitle}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {heroSubtitle}
          </p>
          <div className="space-x-4">
            <Link
              to="/jobs"
              className="bg-brand text-white px-6 py-3 rounded hover:bg-brand-dark transition"
            >
              Browse Jobs
            </Link>
            <Link
              to="/about"
              className="bg-accent text-white px-6 py-3 rounded hover:bg-accent-dark transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Right image */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    )
}

export default Hero