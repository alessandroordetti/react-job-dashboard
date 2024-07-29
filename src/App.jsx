import './App.css'
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  )
}

export default App
