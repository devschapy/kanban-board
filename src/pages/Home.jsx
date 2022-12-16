import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/common/Header';

const Home = () => {
  return (
    <main className='bg-gray-50 h-screen'>
      <Header />

      <div className='container grid items-center h-full'>
        <div className="grid justify-center gap-6">
          <h2 className='text-center text-gray-700 font-bold text-4xl'>Wellcome <br /> Manage your tasks effortlessly</h2>

          <NavLink to='/task' className='bg-green-400 py-3 px-5 rounded-md shadow-lg block w-fit justify-self-center text-white font-bold hover:scale-110 duration-300'>Go To Task Manage Page</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Home;