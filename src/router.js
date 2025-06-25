import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestRecieve from './pages/requests/RequestRecieve.vue';
import NotFound from './pages/NotFound.vue';

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches', name: 'home' },
    { path: '/coaches', component: CoachesList, name: 'coaches' },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      name: 'coaches-details',

      children: [
        { path: 'contact', component: ContactCoach, name: 'coaches-contact' },
      ], // coaches/id/contact
    },
    { path: '/register', component: CoachRegistration, name: 'register' },
    { path: '/requests', component: RequestRecieve, name: 'requests' },
    { path: '/:notFound(.*)', component: NotFound, name: 'not-found-page' },
  ],
});

export default Router;
