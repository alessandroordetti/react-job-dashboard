import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPge';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJob from './pages/AddJob';



const App = () => {

  const addJob = (newJob) => {
    console.log(newJob);
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  
  return (
     <RouterProvider router={router} />
  )
}

export default App
