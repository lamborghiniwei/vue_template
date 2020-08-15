/* 
* @Author: lzw  
* @Date: 2020-08-04 22:09:28  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-15 10:24:06
*/

import axios from 'axios'
axios.defaults.baseURL = 'http://axf.lindutech.com'
axios.interceptors.response.use((res) => {
  return res.data
})
//   验证登录api/user/public_Boss/
export let getLogin = (obj) => {
  return axios.post('/api/user/public_Boss/login', obj)
}