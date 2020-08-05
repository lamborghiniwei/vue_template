/* 
* @Author: lzw  
* @Date: 2020-08-05 22:54:34  
* @Last Modified by:   lzw  
* @Last Modified time: 2020-08-05 22:54:34  
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
//  防止vuex的数据刷新消失
for (let item in state) {
  if (localStorage.getItem(item)) {
    state[item] = JSON.parse(localStorage.getItem(item))
  }
}
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
