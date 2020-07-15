import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import articles from "./articles";
import banners from "./banners";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default new Vuex.Store({
  state: {
    showMenu: false,
    articles,
    banners,
  },
  mutations,
  actions,
  getters,
})
