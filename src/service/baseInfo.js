import axios from '@/utils/axios'
import qs from 'qs'

export const getBase = async (params = {id: 2}) => {
  return await axios.get(`api/users/get-base?${qs.stringify(params)}`)
}