import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routeOptions = [
  {
    path: '/',
    name: 'Home'
  }
]
//  webpackChunkName：新块的名称。从webpack 2.6.0开始，
//  在给定的字符串中，占位符[index]和[request]被支持为递增的数字或实际解析的文件名。
//  添加此注释将使我们单独的块命名为[my-chunk-name] .js，而不是[id] .js。
const routes = routeOptions.map(route => {
  route = {
    ...route,
    component: () => import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`)
  }
  return route
})
const router = new VueRouter({
  routes
});

export default router;
