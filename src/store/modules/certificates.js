import utils from '@/utils'
const certificates = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        name: 获得证书名称,
        time: 获得时间
      }
     */
    certificates: []
  }),
  mutations: {
    setCertificateOne(state, certificates) {
      state.certificates = certificates
    },
  },
  actions: {
    setCertificateOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.certificates.push(one)
        commit('setCertificateOne', state.certificates)
      }
    },
    modifyCertificateOne({ commit, state }, one) {
      if(one.id && state.certificates.map(item => item.id).includes(one.id)) {
        const certificates = state.certificates.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
            return element;
          }
        });
        commit('setCertificateOne', certificates)
      }
    }
  },
  getters: {}
}

export default certificates
