import axios from 'axios'

const axiosClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data
    }
    return res
  },
  (err) => {
    if (err.response && err.response.data) return err.response.data
    return Promise.reject(err)
  }
)

export default axiosClient
