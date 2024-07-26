import './App.css'
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListings />
    </>
  )
}

export default App
