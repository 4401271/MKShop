import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from "@/vuex/mutation-types";

export default {
  [RECEIVE_ADDRESS](state, address){
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, categories){
    state.categorys = categories
  },
  [RECEIVE_SHOPS](state, shops){
    state.shops = shops
  },
}