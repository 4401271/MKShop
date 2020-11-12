/*
* 在该文件发送请求，将发送请求的代码封装到一个函数中，然后在不同的操作状态去执行不同的mutation
* */
import {REQUESTING, REQ_SUCCESS, REQ_ERROR} from './mutation-types'
import axios from "axios";

export default {

  async search({commit}, userInput) {

    //  发送请求前将状态修改为请求状态
    commit(REQUESTING)

    try {
      let response = await axios('/api/search/users', {params: {q: userInput}})
      // 箭头函数本身右边是需要return进行返回，当我们想省略return时，就需要添加()
      const users = response.data.items.map(user => ({
        username: user.login,
        url: user.html_url,
        avatar_url: user.avatar_url
      }))

      // 请求成功，将存储用户信息的users数组传递过去
      commit(REQ_SUCCESS,users)

    }catch (error){

      // 请求失败，将错误信息传递过去
      commit(REQ_ERROR, error.message)

    }
  }
}