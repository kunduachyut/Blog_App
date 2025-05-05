'use client'

import { assets } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';
import HoverMenu from '@/Components/HoverMenu';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <HoverMenu />
      <div className="bg-transparent py-0 px-5 md:px-12 lg:px-28">
        <div className="flex items-center justify-center text-center min-h-[200px]">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px]">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-5 mt-[-80px] mb-20">
        {/* Image Left */}
        <div className="lg:w-1/2 w-full">
          <Image
            className="border-4 border-white w-full h-auto"
            src={data.image}
            width={1280}
            height={720}
            alt=""
          />
        </div>

        {/* Content Right */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-8">{data.description}</p>

          <div className="mt-10">
            <p className="text-black font-semibold mb-4">Share this article</p>
            <div className="flex gap-4">
              <Image src={assets.facebook_icon} width={40} height={40} alt="Facebook" />
              <Image src={assets.twitter_icon} width={40} height={40} alt="Twitter" />
              <Image src={assets.googleplus_icon} width={40} height={40} alt="Google+" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
