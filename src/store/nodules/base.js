const base = {
  namespaced: true,
  state: () => ({
    username: ''
  }),
  mutations: {
    setUsername(state, username) {
      // 变更状态
      state.username = username
    }
  },
  actions: {
    setUsername({ commit }, data) {
      commit('setUsername', data)
    }
  },
  getters: {
    getUsername(state) {
      return state.username
    }
  }
}

export default base
