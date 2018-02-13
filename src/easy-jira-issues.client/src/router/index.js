import Vue from 'vue';
import Router from 'vue-router';
import LandingComponent from '@/features/landing/LandingComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingComponent',
      component: LandingComponent,
    },
  ],
});
