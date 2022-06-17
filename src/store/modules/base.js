const base = {
  namespaced: true,
  state: () => ({
    username: '',
    sex: '',
    birthday: '',
    email: '',
    phone: '',
    political_outlook: '',
    nation: '',
    address: '',
    graduated_from: '',
    graduated_time: '',
    education: ''
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
  },
  getters: {}
}

export default base
