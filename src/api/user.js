import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 更新用户信息
export function editUserInfo(data) {
  return request({
    url: api.EditUserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 用户信息 post 方法
export function getUserList(data) {
  return request({
    url: api.UserList,
    method: 'post',
    data,
    hideloading: true
  })
}

// 添加用户
export function addUser(data) {
  return request({
    url: api.AddUser,
    method: 'post',
    data,
    hideloading: false
  })
}

// 删除用户 get
export function delUser(data) {
  return request({
    url: api.DelUser,
    method: 'get',
    data,
    hideloading: false
  })
}

// 用户信息 post 方法
export function modifyUser(data) {
  return request({
    url: api.ModifyUser,
    method: 'post',
    data,
    hideloading: false
  })
}


// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}
