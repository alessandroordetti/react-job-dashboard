import React from 'react';
import logo from './../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive}) => isActive ? 'hidden md:block rounded-full px-5 py-2 text-white text-2xl ml-2 bg-sky-700 hover:bg-sky-700' : 'hidden md:block rounded-full px-5 py-2 text-white text-2xl ml-2 hover:bg-sky-700';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink to="/" className='flex flex-shrink-0 items-center mr-4'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Dev Jobs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to='/add-job' className={`hidden md:block rounded-full px-5 py-2 text-white text-2xl ml-2 bg-black hover:bg-sky-700' : 'hidden md:block rounded-full px-5 py-2 text-white text-2xl ml-2 hover:bg-sky-700` }>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar