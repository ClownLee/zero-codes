import axios from 'axios'
import config from './config'

console.log(config[process.env.NODE_ENV].DOMAIN_API)

const http = axios.create({
  baseURL: config[process.env.NODE_ENV]?.DOMAIN_API || '',
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
