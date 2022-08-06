import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || '',
  withCredentials: true,
  timeout: 1000 * 10
})

http.interceptors.request.use(function (config) {


  return config
})

http.interceptors.response.use(function (config) {


  return config.data
})


export default http
