import axios from 'axios'
// import {startLoading, endLoading} from './loading'
// console.log(axios)
const request = axios.create({
  baseURL: 'http://42.193.99.32:8866' // 测试服务器
})

// 导出请求方法
export default request
