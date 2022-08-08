const base = {
  namespaced: true,
  state: () => ({
    // 姓名
    username: '',
    // 性别
    sex: '',
    // 出生日期
    birthday: '',
    // 邮箱
    email: '',
    // 电话
    phone: '',
    // 政治面貌
    political_outlook: '',
    // 民族
    nation: '',
    // 常住地址
    address: '',
    // 毕业院校
    graduated_from: '',
    // 毕业时间
    graduated_time: '',
    // 学历
    education: '',
    // 自我评价
    self_evaluation: ''
  }),
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    setSex(state, sex) {
      state.sex = sex
    },
    setBirthday(state, birthday) {
      state.birthday = birthday
    },
    setEmail(state, email) {
      state.email = email
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setPoliticalOutlook(state, political_outlook) {
      state.political_outlook = political_outlook
    },
    setNation(state, nation) {
      state.nation = nation
    },
    setAddress(state, address) {
      state.address = address
    },
    setGraduatedFrom(state, graduated_from) {
      state.graduated_from = graduated_from
    },
    setGraduatedTime(state, graduated_time) {
      state.graduated_time = graduated_time
    },
    setEducation(state, education) {
      state.education = education
    },
    setSelfEvaluation(state, self_evaluation) {
      state.self_evaluation = self_evaluation
    },
    setId(state, id) {
      state.id = id
    },
  },
  actions: {
    setUsername({ commit }, data) {
      commit('setUsername', data)
    },
    setSex({ commit }, data) {
      commit('setSex', data)
    },
    setBirthday({ commit }, data) {
      commit('setBirthday', data)
    },
    setEmail({ commit }, data) {
      commit('setEmail', data)
    },
    setPhone({ commit }, data) {
      commit('setPhone', data)
    },
    setPoliticalOutlook({ commit }, data) {
      commit('setPoliticalOutlook', data)
    },
    setNation({ commit }, data) {
      commit('setNation', data)
    },
    setAddress({ commit }, data) {
      commit('setAddress', data)
    },
    setGraduatedFrom({ commit }, data) {
      commit('setGraduatedFrom', data)
    },
    setGraduatedTime({ commit }, data) {
      commit('setGraduatedTime', data)
    },
    setEducation({ commit }, data) {
      commit('setEducation', data)
    },
    setSelfEvaluation({ commit }, data) {
      commit('setSelfEvaluation', data)
    },
    setId({ commit }, data) {
      commit('setId', data)
    },
  }
}

export default base
