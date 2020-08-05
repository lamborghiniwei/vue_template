/* 
* @Author: lzw  
* @Date: 2020-08-05 22:54:22  
 * @Last Modified by: lzw
 * @Last Modified time: 2020-08-05 22:55:24
*/
import {
  RECEIVE_TOKEN,
} from './mutation_type'
export default {
  //  token
  actGetToken ({commit}, token) {
    commit(RECEIVE_TOKEN, {token})
  }
}
