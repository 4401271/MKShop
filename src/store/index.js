import Vue from 'vue'
import Vuex from 'vuex'
import state  from './state'
import actions  from './actions'
import mutations  from './mutations'
import getters  from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

  // 这些都是配置对象，因此不能对文件乱起名字
  state,
  actions,
  mutations,
  getters

})