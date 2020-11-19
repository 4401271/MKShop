/*
* 包含n个接口请求的函数模块
* */
import ajax from './ajax'

// 1. 根据经纬度获取位置详情
export const reqAddress = (long, lat) => ajax(`/position/${lat},${long}`)

// 2. 获取食品分类列表
export const reqCategory = () => ajax('/index_category')

// 3. 根据经纬度获取商铺列表
export const reqShops = ({long, lat}) => ajax('/shops', {params: {long, lat}})
