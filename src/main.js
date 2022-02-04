import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from "vue-router";
// import Table from './components/Table'
// import Update from './components/Update'
import Tablex from "@/components/Tablex";
import Updatex from "@/components/Updatex";
import {store} from "@/store/store";

Vue.use(ElementUI);
Vue.use(VueRouter)

const routes = [
  // {path: '/', component: Table, name: 'Home'},
  // {path: '/update', component: Update, name: 'update'}
  {path: '/', component: Tablex},
  {path: '/updatex/:index', component: Updatex}
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
