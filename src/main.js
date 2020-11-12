import Vue from 'vue'
import App from './App.vue'
// import store from "./store";
import router from './router'
import 'lib-flexible'  // 这个引入方式并没有添加相对绝对路径，但是却可以找到，寻找方式是先从配置中看是否有关于该文件的配置，如果没有那么就去node_modules中寻找，找到同名文件之后，就会去看其下面的package.json文件，看main指向的是哪个文件，就会从哪个文件找我们真正需要引入的文件

// Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router  //所有组件都能看到$router和$route  <router-link>和<router-view>
}).$mount('#app')