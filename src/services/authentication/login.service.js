import { baseUrl } from '@/constants/common/base/base-url.constants'
import { axiosInstance } from '@/plugins/axios'

const generateUrl = (path) => baseUrl + path

export const login = (data) => {
  const url = generateUrl('user/login')

  return axiosInstance.post(url, data)
}
