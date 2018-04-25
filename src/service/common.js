import http from '@/http'
import apis from '@/api'

export const getData = params => {
  return http.get(apis.getData, params)
}
