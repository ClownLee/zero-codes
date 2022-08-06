import axios from '@/utils/axios'
export const getBase = async (params) => {
  return await axios.get('api/users/get-base')
}