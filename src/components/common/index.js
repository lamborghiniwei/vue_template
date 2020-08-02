/* 
* @Author: lzw  
* @Date: 2020-08-02 11:50:04  
* @Last Modified by: lzw
* @Last Modified time: 2020-08-02 11:55:52
* 高频率的组件注册为全局组件
*/
import Vue from 'vue'

const context = require.context('./', false, /\.vue$/)

context.keys().forEach(key => {
    let component = context(key).default
    Vue.component(component.name, component)
})