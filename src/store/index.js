import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import slides from "./slides";
import articles from "./articles";
import banners from "./banners";
import accordion from "./accordion";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default new Vuex.Store({
  state: {
    showMenu: false,
    showPage: false,
    pageIndex: 0,
    slides,
    articles,
    banners,
    accordion,
  },
  mutations,
  actions,
  getters,
})
