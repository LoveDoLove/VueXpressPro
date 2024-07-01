import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
  timeout: 30000
})

export default request
