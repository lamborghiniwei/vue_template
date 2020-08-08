/* 
* @Author: lzw  
* @Date: 2020-08-05 22:54:54  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-08 23:45:15
*/
import {
  RECEIVE_TOKEN
} from './mutation_type'
import {setItem} from '../api/localStorage'
export default {
  //  token
  [RECEIVE_TOKEN] (state, {token}) {
    state.token = token
    setItem('token', token)
  }
}
