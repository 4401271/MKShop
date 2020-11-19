/*
对axios进行二次封装，用来发送ajax请求

一个能发送ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对post请求参数进行urlencoded处理, 而不使用默认的json方式(后台接口不支持)
  json是个对象，其内部保存的是键值对，{key: value}
  如果不支持json格式，就需要将其格式转换为urlencoded，格式：q=s&w=p
  判断是否为json的方式就是判断这个数据是否为对象

4. 配置请求超时的时间
5. 通过请求头携带token数据
*/

import axios from 'axios'
// query-string可以用来将Object格式的字符串转换为urlencoded的字符串
import qs from 'qs'

// 创建一个实例
const instance = axios.create({
  // 跨域请求问题 添加这个配置可以让浏览器在请求的最前面添加api
  baseURL: '/api',
  // 4. 配置请求超时的时间
  timeout: 20000
})

// 添加请求拦截器
instance.interceptors.request.use((config)=>{
  console.log('req interceptor')
  // 3. 对post请求参数进行urlencoded处理, 而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if (data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('res interceptor')

    // 2. 异步请求成功的数据不是response, 而是response.data
    return response.data
  },
  error => {
    alert('请求出错，错误信息：'+error.message)
    return new Promise(()=>{
    })
  }
)

export default instance
