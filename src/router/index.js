/*
* 向外暴露路由器对象模块
* */
import Vue from 'vue'
import VueRouter from "vue-router";

import routes from "@/router/routes";

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({

  // 配置：路由路径没有#
  // 注意！！！！   这个history是个字符串
  mode: 'history',

  // 配置项目中所有路由
  routes

})