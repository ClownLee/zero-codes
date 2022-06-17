import { createStore } from 'vuex'
import base from './modules/base'
import edu from './modules/edu'

const store = createStore({
  modules: {
    base,
    edu
  }
})

export default store
