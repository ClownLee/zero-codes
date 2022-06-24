import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import base from './modules/base'
import edu from './modules/edu'
import companies from './modules/companies'
import projects from './modules/projects'
import skills from './modules/skills'
import trainings from './modules/trainings'
import certificates from './modules/certificates'

const store = createStore({
  modules: {
    base,
    edu,
    companies,
    projects,
    skills,
    trainings,
    certificates
  },
  plugins: [
    createPersistedstate({
      key: 'vuex',
      storage: window.sessionStorage
    })
  ]
})

export default store
