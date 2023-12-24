import axios from 'axios'
import { API_BASE_URL } from '../../config/endpointApi'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
})

// Add a request interceptor for authentication
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('csrfToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor for handling errors
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 && !error?.response?.headers['service-name']) {
      } else if (error.response.status === 500) {
      } else if (error.response.status === 404) {
        // window.location.href = '/404'
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
