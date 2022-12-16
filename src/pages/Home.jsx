import React from 'react';
import Header from '../components/common/Header';

const Home = () => {
  return (
    <main className='bg-gray-50 h-screen'>
      <Header />

      <div className='container grid items-center h-full'>
        <h2 className='text-center text-gray-700 font-bold text-4xl'>Wellcome <br/> Manage your tasks effortlessly</h2>
      </div>
    </main>
  )
}

export default Home;