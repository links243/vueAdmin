import {Login} from '@/api/user.js'

const user = {
  state: {
    userInfo: '',
    token: ''
  },
  mutations: {
    SET_USERINFO: (state,userInfo) => {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state,token) => {
      state.token = token
    }
  },
  actions: {
    login({commit},userInfo) {
      return new Promise((resolve,reject) => {
        Login(userInfo).then((response) => {
          commit('SET_USERINFO',response.data.data.user)
          commit('SET_TOKEN',response.data.data.token)
          resolve(response)
        }).catch((err) => {
          reject(err)
        });
      })
    }
  }
}

export default user