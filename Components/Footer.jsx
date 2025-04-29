import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row  py-5 item-center'>
      <Image src={assets.logo_light} alt="" width={120}/>
      <p className='text:white'>Contact Details</p>
      <p className='text:white'>Add Address </p>
      <p className='text:white'>Others</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt="" width={40}/>
        <Image src={assets.twitter_icon} alt="" width={40}/>
        <Image src={assets.googleplus_icon} alt="" width={40}/>
      </div>
    </div>
  )
}

export default Footer
