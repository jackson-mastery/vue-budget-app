import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
// import Vuex from 'vuex';

import store from './store';

import App from './App.vue';
import Overview from './views/Overview';
import Budget from './views/Budget';
import Expenses from './views/Expenses';
import Income from './views/Income';


const routes = [
  { path: '/', name: 'home', component: Overview },
  { path: '/budget', name: 'budget', component: Budget },
  { path: '/expenses', name: 'expenses', component: Expenses },
  { path: '/income', name: 'income', component: Income },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

