import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo';
Vue.use(CarbonComponentsVue);
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
