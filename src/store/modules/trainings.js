import utils from '@/utils'
const trainings = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        name: 培训教育名称,
        time_range: 培训教育时间区间,
        certificate：获得证书
      }
     */
    trainings: []
  }),
  mutations: {
    setTrainingOne(state, trainings) {
      state.trainings = trainings
    },
  },
  actions: {
    setTrainingOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.trainings.push(one)
        commit('setTrainingOne', state.trainings)
      }
    },
    modifyTrainingOne({ commit, state }, one) {
      if(one.id && state.trainings.map(item => item.id).includes(one.id)) {
        const trainings = state.trainings.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
            return element;
          }
        });
        commit('setTrainingOne', trainings)
      }
    }
  },
  getters: {}
}

export default trainings
