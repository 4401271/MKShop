import {reqAddress, reqAutoLogin, reqCategories, reqShops} from "@/api";
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS, RECEIVE_USER, RECEIVE_TOKEN, RESET_USER, RESET_TOKEN} from "@/vuex/mutation-types";

export default {
  /*
  * 获取当前地址信息对象的异步action
  * */
  async getAddress({commit, state}){
    const {long, lat} = state
    // 发送异步请求
    const result = await reqAddress(long, lat)

    // 请求成功后，提交给mutation
    if (result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  async getCategories({commit}){
    // 发送异步请求
    const result = await reqCategories()

    // 请求成功后，提交给mutation
    if (result.code === 0){
      const categories = result.data
      commit(RECEIVE_CATEGORIES, categories)
    }
  },
  async getShops({commit, state}){
    const {long, lat} = state
    // 发送异步请求
    const result = await reqShops({long, lat})

    // 请求成功后，提交给mutation
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
  saveUser({commit}, user){
    const token = user.token
    // 将token 保存到local
    localStorage.setItem('token_key', token)

    delete user.token
    commit(RECEIVE_TOKEN, {token})
    commit(RECEIVE_USER, {user})
  },
  /*
  * 自动登录
  * */
  async autoLogin({commit, state}) {
    // 配置自动登录，在有token但是没有user._id时需要自动登录，自动登录即携带token向后台发送请求，然后将用户信息再加进去
    if (state.token && !state.user._id){
      const result = await reqAutoLogin()
      if (result.code === 0){
        const user = result.data
        commit(RECEIVE_USER, {user})
      }
    }
  },
  logout({commit}){
    localStorage.removeItem('token_key'),
    commit(RESET_USER)
    commit(RESET_TOKEN)
  }
}