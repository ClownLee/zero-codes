
const routes = [
  { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
  // will match /users/posva but not:
  // - /users/posva/ because of strict: true
  // - /Users/posva because of sensitive: true
  { path: '/users/:id', name: 'users', component: () => import('@/views/users/index.vue') },
  // will match /users, /Users, and /users/42 but not /users/ or /users/42/
  /* { path: '/users/:id?' }, */
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/no-page/index.vue') }
]

export default routes
