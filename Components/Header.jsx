import { blog_data, assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import '../Style/headerStyle.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Corrected capitalization
    formData.append('email', email);

    try {
      const response = await axios.post('/api/email', formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      toast.error('An error occurred while subscribing.');
      console.error('Subscription Error:', error);
    }
  };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image className='image' src={assets.logo} width={150} alt='Logo' />
        {/* <button className='button'>
          Get Started <Image src={assets.arrow} alt='Arrow' />
        </button> */}
      </div>
      <div className='text-center my-8'>
        <div className='text-3xl sm:text-5xl font-medium'>Latest Products Arived</div>
        <p className='mt-10 max-w-[720px] m-auto text-xs sm:text-base'>
          This is the page where you can find your usefull products.And most importantly you can buy is from the given link 
        </p>
        <form
          onSubmit={onSubmitHandler}
          className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black'
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter your queries'
            className='pl-4 outline-none'
          />
          <button
            type='submit'
            className='border border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'
          >
            Query?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
