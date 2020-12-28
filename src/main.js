import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
// import Vuex from 'vuex';

import store from './store';

import App from './App.vue';
import Home from './views/Home.vue';
import Foo from './views/Foo.vue';


const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/foo', name: 'foo', component: Foo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

