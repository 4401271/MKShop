/*
* 该文件中存储着直接修改state的方法
* */
import {REQUESTING, REQ_SUCCESS, REQ_ERROR} from './mutation-types'

export default {
  // REQUESTING是一个对象，我们需要对象里面的值，因此需要加上[]取出其中的值
  [REQUESTING](state){
    state.inputMsg = false
    state.searchMsg = true
  },
  [REQ_SUCCESS](state, users){
    state.searchMsg = false
    state.users = users
  },
  [REQ_ERROR](state, errMsg){
    state.searchMsg = false
    state.errMsg = errMsg
  }
}