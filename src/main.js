import Vue from 'vue'
import store from './store.js';
import routes from './routes';
const app = new Vue({
  el: '#app',
  store,
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


