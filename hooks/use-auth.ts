import { authApi } from '@/api/index'
import { PublicConfiguration } from 'swr/dist/types'
import useSWR from 'swr'

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  //Get profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  })

  const firstLoading = profile === undefined && error === undefined

  const login = async () => {
    await authApi.login({ username: 'test1', password: '123456' })
    await mutate()
  }

  const logout = async () => {
    await authApi.logout()
    mutate({}, false)
  }

  return {
    profile,
    error,
    firstLoading,
    login,
    logout,
  }
}
