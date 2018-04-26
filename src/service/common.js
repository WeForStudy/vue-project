import http from '@/http'
import apis from '@/api'
console.log(apis)
export const getData = params => {
  return http.get(apis.getData, params)
}
