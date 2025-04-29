// import { assets } from "@/Assets/assets";
// import Sidebar from "@/Components/AdminComponents/Sidebar";
// import Image from "next/image";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function Layout({ children }) {
//     return (
//         <>
//             <div className="flex">
//                 <ToastContainer theme="dark" />
//                 <Sidebar />
//                 <div className="flex flex-col w-full">
//                     <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
//                         <h3 className="font-medium">Admin Panel</h3>
//                         <Image src={assets.profile_icon} alt='Profile Icon' width={40} height={40} />
//                     </div>
//                     {children}
//                 </div>
//             </div>
//         </>
//     );
// }

'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from "@/Components/AdminComponents/Sidebar"
import { ToastContainer } from 'react-toastify'
import Image from "next/image"
import { assets } from "@/Assets/assets"
import 'react-toastify/dist/ReactToastify.css'

export default function AdminLayout({ children }) {
  const router = useRouter()

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="flex">
      <ToastContainer theme="dark" />
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 px-12 border-b border-black max-h-[60px]">
          <h3 className="font-medium">Admin Panel</h3>
          <Image src={assets.profile_icon} alt='Profile Icon' width={40} height={40} />
        </div>
        {children}
      </div>
    </div>
  )
}