import utils from '@/utils'
const projects = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        name: 项目名称,
        role：角色,
        project_description: 项目描述,
        time_range: 项目时间区间,
        honor: 成就与荣誉
      }
     */
    projects: []
  }),
  mutations: {
    setProjectOne(state, projects) {
      state.projects = projects
    },
  },
  actions: {
    setProjectOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.projects.push(one)
        commit('setProjectOne', state.projects)
      }
    },
    modifyProjectOne({ commit, state }, one) {
      if(one.id && state.projects.map(item => item.id).includes(one.id)) {
        const projects = state.projects.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
            return element;
          }
        });
        commit('setProjectOne', projects)
      }
    }
  },
  getters: {}
}

export default projects
