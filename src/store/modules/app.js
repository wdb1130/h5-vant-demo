const state = {
  userName: '',
  token: ''
}
// 改变状态
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_TOKEN(state, data) {
    state.token = data
  }
}


// 提交mutations
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setToken({ commit }, data) {
    commit('SET_TOKEN', data)
  }
}
export default {
  state,
  mutations,
  actions
}
