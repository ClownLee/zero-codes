import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import base from './modules/base'
import edu from './modules/edu'

const store = createStore({
  modules: {
    base,
    edu
  },
  plugins: [
    createPersistedstate({
      key: 'vuex',
      storage: window.sessionStorage
    })
  ]
})

export default store
