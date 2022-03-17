import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import notebook from './modules/notebook'
import note  from './modules/note.js'
import user from './modules/user'
import trash from './modules/trash'


const store = new Vuex.Store({
  modules:{
    notebook,
    note,
    user,
    trash
  }
})

export default store
