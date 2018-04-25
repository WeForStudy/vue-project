import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000' // 初始路径
axios.defaults.timeout = 100000 // 设置超时时间
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest' // 标示是一个XMLHttpRequest
// 一个反应拦截 
axios.interceptors.response.use(res => {
  if(res.status === 200) {
    if(res.data.retcode === "2000000") {
      return res.data.data || res.data.msg
    }
  }
})
export default axios
