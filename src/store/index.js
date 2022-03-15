import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import notebook from './modules/notebook'
import note  from './modules/note'
import user from './modules/user'


const store = new Vuex.Store({
  modules:{
    notebook,
    note,
    user
  }
})

export default store
