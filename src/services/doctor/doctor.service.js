import { baseUrl } from '@/constants/common/base/base-url.constants'
import { axiosInstance } from '@/plugins/axios'

const generateUrl = (path) => baseUrl + path

export const getAllDoctors = () => {
  const url = generateUrl('doctor')

  return axiosInstance.get(url)
}

export const getTopDoctors = (params) => {
  const config = {
    params
  }
  const url = generateUrl('doctor')

  return axiosInstance.get(url, config)
}
