import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 text-base">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <p>
            Copyright © {new Date().getFullYear()}{' '}
            <span className="text-lime-400 font-semibold">
              Atlab Co Production Pvt. Ltd.
            </span>
          </p>
        </div>

        {/* Center: Links */}
        <div className="text-lime-400 text-center space-x-2 whitespace-nowrap">
          <a href="#" className="hover:underline">Terms & Conditions</a> |
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline">Shipping Policy</a> |
          <a href="#" className="hover:underline">Return Policy</a>
        </div>

        {/* Right: Payment Icons */}
        <div className="flex items-center space-x-2">
          <span className="text-white">We accept</span>

          <div className="bg-white h-10 rounded">
            <Image src={assets.upi_icon} alt="UPI" width={40} />
          </div>
          <div className="bg-white p-1 rounded">
            <Image src={assets.visa_icon} alt="VISA" width={40} />
          </div>
          <div className="bg-white p-1 rounded">
            <Image src={assets.master_card_icon} alt="Mastercard" width={40} />
          </div>
          <div className="bg-white p-1 rounded">
            <Image src={assets.rupay_logo_icon} alt="RuPay" width={40} />
          </div>
        </div>


      </div>
    </footer>
  )
}

export default Footer
