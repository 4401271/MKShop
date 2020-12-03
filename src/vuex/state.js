export default {
  lat: 22.297088, // 纬度
  long: 114.178196, // 经度
  address: {}, // 地址信息对象
  categories: [], // 分类数组
  shops: [], //商家数组
  user: {}, //用户信息
  token: localStorage.getItem('token_key') || ''
}