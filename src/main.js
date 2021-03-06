import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {rtdbPlugin} from "vuefire"
import "./assets/styles/main.scss"
import './assets/tailwind.css'
import "vue-swatches/dist/vue-swatches.min.css"
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(rtdbPlugin);
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')