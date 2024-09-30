import React from 'react'
import Hero from '../crash1/src/components/hero'
import HomeCards from '../crash1/src/components/HomeCards'
import JobListings from '../crash1/src/components/JobListings'
import ViewAllJobs from '../crash1/src/components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome ={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage