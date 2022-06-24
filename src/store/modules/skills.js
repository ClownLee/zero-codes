import utils from '@/utils'
const skills = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        name: 职业技能描述,
        stars：熟练度（星）
      }
     */
    skills: []
  }),
  mutations: {
    setSkillOne(state, skills) {
      state.skills = skills
    },
  },
  actions: {
    setSkillOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.skills.push(one)
        commit('setSkillOne', state.skills)
      }
    },
    modifySkillOne({ commit, state }, one) {
      if(one.id && state.skills.map(item => item.id).includes(one.id)) {
        const skills = state.skills.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
            return element;
          }
        });
        commit('setSkillOne', skills)
      }
    }
  },
  getters: {}
}

export default skills
