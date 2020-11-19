import {reqAddress, reqCategory, reqShops} from "@/api";
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from "@/vuex/mutation-types";

export default {
  /*
  * 获取当前地址信息对象的异步action
  * */
  async getAddress({commit, state}){
    const {long, lat} = state
    // 发送异步请求
    const result = await reqAddress(long, lat)

    // 请求成功后，提交给mutation
    if (result.data === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  async getCategories({commit}){
    // 发送异步请求
    const result = await reqCategory()

    // 请求成功后，提交给mutation
    if (result.data === 0){
      const categories = result.data
      commit(RECEIVE_CATEGORIES, categories)
    }
  },
  async getShops({commit, state}){
    const {long, lat} = state
    // 发送异步请求
    const result = await reqShops({long, lat})

    // 请求成功后，提交给mutation
    if (result.data === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}