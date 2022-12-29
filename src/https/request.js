import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(req => {
    return req
  }, err => {
    console.log('请求失败', err)
  })
  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log('响应失败', err)
  })

  return instance(config)
}
