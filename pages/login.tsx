import {} from 'react'
import { authApi } from '@/api/index'

export default function LoginPage() {
  const handleLoginClick = async () => {
    try {
      await authApi.login({ username: 'test1', password: '123456' })
    } catch (error) {
      console.log('Failed to login', error)
    }
  }

  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('Failed to get profile', error)
    }
  }

  const handleLogoutClick = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('Failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
