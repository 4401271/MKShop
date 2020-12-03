import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS, RECEIVE_USER, RECEIVE_TOKEN, RESET_TOKEN, RESET_USER} from "@/vuex/mutation-types";

export default {
  [RECEIVE_ADDRESS](state, address){
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, categories){
    state.categories = categories
  },
  [RECEIVE_SHOPS](state, shops){
    state.shops = shops
  },
  [RECEIVE_USER](state, {user}){
    state.user = user
  },
  [RECEIVE_TOKEN](state, {token}){
    state.token = token
  },
  [RESET_TOKEN](state){
    state.token = ''
  },
  [RESET_USER](state){
    state.user = {}
  }
}