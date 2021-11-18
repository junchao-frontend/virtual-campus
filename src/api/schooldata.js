import request from '../utils/request'

// 获取所有点位数据
export const initData = data => {
  return request({
    method: 'GET',
    url: '/Platform/Show',
    // data用来设置POST请求体
    data
  })
}
// 请求导航路线
export const getPath = params => {
  return request({
    method: 'GET',
    url: '/ShowPath',
    params
  })
}
