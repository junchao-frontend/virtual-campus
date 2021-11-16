import request  from '../utils/request'

export const toLogin = data => {
  return request({
    method: 'POST',
    url: '/User/Login',
    data
  })
}
