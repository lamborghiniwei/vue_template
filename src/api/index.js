/* 
* @Author: lzw  
* @Date: 2020-08-04 22:09:28  
* @Last Modified by:   lzw  
* @Last Modified time: 2020-08-04 22:09:28  
*/

import axios from 'axios'
//  axios.defaults.baseURL = 'http://axf.lindutech.com'
axios.defaults.baseURL = '/apis'
axios.interceptors.response.use((res) => {
  return res.data
})
//   验证登录api/user/public_Boss/
export let getLogin = (obj) => {
  return axios.post('/api/user/public_Boss/login', obj)
}
//   获取客服号码
export let getPhone = () => {
  return axios.post('/api/user/public_Boss/about_phone')
}
//  退出登录
export let getLoginOut = () => {
  let token = getItem('token')
  return axios.post('/api/user/public_Boss/logout', {}, {
    headers: {
      'XX-Token': token,
      'XX-Device-Type': 'web'
    }
  })
}