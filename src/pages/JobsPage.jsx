import React from 'react'
import Hero from '../components/Hero';
import JobListings from '../components/JobsListings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings />
    </section>
  )
}

export default JobsPage