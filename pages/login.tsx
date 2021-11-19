import {} from 'react'
import { authApi } from '@/api/index'
import { useAuth } from '@/hooks/index'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })

  const handleLoginClick = async () => {
    try {
      await login()
      router.push('/about')
    } catch (error) {
      console.log('Failed to login', error)
    }
  }

  // const handleGetProfileClick = async () => {
  //   try {
  //     await authApi.getProfile()
  //   } catch (error) {
  //     console.log('Failed to get profile', error)
  //   }
  // }

  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('Failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to About</button>
    </div>
  )
}
