import request from '@/utils/request.js'

export const Login = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}