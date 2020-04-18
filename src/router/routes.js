// Layouts
import MainLayout from 'layouts/main-layout'
import RestoringLayout from 'layouts/restoring-layout'

// Pages
import Profile from 'pages/app/profile'
import Home from 'pages/app/home'

export default [{ // Auth Routes
    path: '/auth',
    redirect: 'auth/challenge',
    component: () => import('layouts/auth-layout'),
    children: [{
      path: 'challenge',
      name: 'challenge',
      component: () => import('pages/auth/challenge')
    }]
  },

  {
    // Restoring
    path: '/',
    component: RestoringLayout
  },

  { // Main Routes
    path: '/app',
    component: MainLayout,
    redirect: '/app/home',
    meta: {
      authRequired: true
    },
    children: [{
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        authRequired: true
      }
    }, {
      path: 'home',
      name: 'home',
      component: Home,
      meta: {
        authRequired: true
      }
    }]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/errors/404')
  }
]
