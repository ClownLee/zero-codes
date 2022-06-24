import utils from '@/utils'
const companies = {
  namespaced: true,
  state: () => ({
    /**
      {
        id: 唯一主键，系统自动生成哈希字符串,
        name: 公司名称,
        post：职位,
        job_description: 职位描述,
        time_range: 在职时间区间,
        honor: 成就与荣誉
      }
     */
    companies: []
  }),
  mutations: {
    setCompanyOne(state, companies) {
      state.companies = companies
    },
  },
  actions: {
    setCompanyOne({ commit, state }, one) {
      if(!one.id) {
        one.id = utils.getHashId()
        state.companies.push(one)
        commit('setCompanyOne', state.companies)
      }
    },
    modifyCompanyOne({ commit, state }, one) {
      if(one.id && state.companies.map(item => item.id).includes(one.id)) {
        const companies = state.companies.map(element => {
          if(element.id === one.id) {
            return one;
          } else {
            return element;
          }
        });
        commit('setCompanyOne', companies)
      }
    }
  },
  getters: {}
}

export default companies
