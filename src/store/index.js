import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import slides from "./slides";
import articles from "./articles";
import banners from "./banners";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default new Vuex.Store({
  state: {
    showMenu: true,
    showPage: true,
    pageIndex: 0,
    slides,
    articles,
    banners,
  },
  mutations,
  actions,
  getters,
})
