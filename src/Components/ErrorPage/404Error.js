import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../Public/Images/errorImg.webp';
import Navbar from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';

function ErrorPage() {
  return (
    <>
      <Navbar />

      <div style={{ textAlign: 'center', padding: '50px' }} className=' h-screen'>
        <img src={errorImg} alt='Error page' className='lg:w-1/2 lg:h-1/2 mx-auto' />
        <div style={{ marginTop: '20px' }}>
          <Link 
            to="/" 
            className='text-orange-400 outline rounded-3xl p-3'
          >
            Go Back to Home
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ErrorPage;