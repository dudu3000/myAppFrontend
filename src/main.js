import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'


const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})




Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    addToken (token){
      state.token
    }
  }
})
