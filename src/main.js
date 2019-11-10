import Vue from 'vue'
import App from './App.vue'
import router from 'src/router'
import store from 'src/store/index'
import 'src/plugins/bootstrap-vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
