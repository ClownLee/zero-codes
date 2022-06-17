import { createStore } from 'vuex'
import base from './nodules/base'
import edu from './nodules/edu'

const store = createStore({
  modules: {
    base,
    edu
  }
})

export default store
