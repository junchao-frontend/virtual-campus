import request from '../utils/request'

export const initData = data => {
  return request({
    method: 'GET',
    url: '/Platform/Show',
    // data用来设置POST请求体
    data
  })
}
