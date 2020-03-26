import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// const baseURL = ''

const service = axios.create({
  baseURL: "http://127.0.0.1:3000", // api 的 base_url
  timeout: 15000 // 请求超时时间
})

export default service