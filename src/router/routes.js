const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
    ],
  },

  {
    path: '/dashboard',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/AdminHome.vue') },
      { path: 'students', component: () => import('pages/dashboard/StudentsPage.vue') },
      { path: 'courses', component: () => import('pages/dashboard/CoursesPage.vue') },
      { path: 'schedule', component: () => import('pages/dashboard/SchedulePage.vue') },
      { path: 'finance', component: () => import('pages/dashboard/FinancePage.vue') },
      { path: 'reports', component: () => import('pages/dashboard/ReportsPage.vue') },
      { path: 'settings', component: () => import('pages/dashboard/SettingsPage.vue') },
      { path: 'profile', component: () => import('pages/dashboard/ProfilePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
