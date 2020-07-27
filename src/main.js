import Vue from 'vue'
import store from './store.js';
import routes from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(ElementUI, { locale })

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


