import utils from '@/utils'
const edu = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        school: 就读院校,
        edu：学历,
        major: 专业,
        time_range: 就读时间区间,
        honor: 成就与荣誉
      }
     */
    education: []
  }),
  mutations: {
    setEducationOne(state, education) {
      state.education = education
    },
  },
  actions: {
    setEducationOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.education.push(one)
        commit('setEducationOne', state.education)
      }
    },
    modifyEducationOne({ commit, state }, one) {
      if(one.id && state.education.map(item => item.id).includes(one.id)) {
        const education = state.education.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
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
