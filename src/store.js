import Vue from 'vue'
import Vuex from 'vuex'





Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'test'
  },
  mutations: {
    addToken (state, token){
      return state.token = token;
    }
  },
  actions: {
    addToken (context, token){
      context.commit('addToken', token);
    }
  }
})