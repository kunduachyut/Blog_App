import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import "../Style/blogitemsStyle.css"
import Link from 'next/link'

const BlogItems = ({ title, description, category, image, id }) => {
  return (
    <div className='blogImage'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt='' width={400} height={400} className='border-b border-black' />
      </Link>
      
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        
        <Link href={`/blogs/${id}`}>
          <button className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition'>
            Read more
            {/* <Image src={assets.arrow} className='ml-2' alt='' width={12} /> */}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BlogItems
