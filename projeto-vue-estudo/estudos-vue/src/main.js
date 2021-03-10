//imports
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';


// tem que vir entre chaves, porque não é default
import { routes } from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes, 
  mode: 'history'
});
//uses
Vue.use(VueResource);



//init
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})