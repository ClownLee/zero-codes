const edu = {
  namespaced: true,
  state: () => ({
    education: []
  }),
  mutations: {
    setEducationOne(state, education) {
      state.education = education
    },
  },
  actions: {
    setEducationOne({ commit, state }, one) {
      if(one.id && !state.education.map(item => item.id).includes(one.id)) {  
        state.education.push(one)
        commit('setEducationOne', state.education)
      }
    },
    modifyEducationOne({ commit, state }, one) {
      if(one.id && state.education.map(item => item.id).includes(one.id)) {
        const education = state.education.map(element => {
          if(element.id === one.id) {
            return one;
          }else {
            return element;
          }
        });
        commit('setEducationOne', education)
      }
    }
  },
  getters: {}
}

export default edu