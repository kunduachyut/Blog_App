'use client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('isAdmin')
    router.push('/login')
  }

  return (
    <button onClick={handleLogout} className="text-sm text-red-500">
      Logout
    </button>
  )
}
