// Layouts
import MainLayout from 'layouts/MainLayout'
import RestoringLayout from 'layouts/RestoringLayout'

// Pages
import Profile from 'pages/app/Profile'
import People from 'pages/app/People'
import Home from 'pages/app/Home'
import Browse from 'pages/app/Browse'

export default [{
    path: '/auth',
    redirect: 'auth/challenge',
    component: () => import('layouts/AuthLayout'),
    children: [{
      path: 'challenge',
      name: 'challenge',
      component: () => import('pages/auth/Challenge')
    }, 
    {
      path: 'about-you',
      name: 'anagraphic',
      component: () => import('pages/auth/Anagraphic')
    }]
  },

  {
    path: '/',
    name: 'restoring', 
    component: RestoringLayout
  },

  {
    path: '/app',
    component: MainLayout,
    redirect: '/app/home',
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }, {
      path: 'people',
      name: 'people',
      component: People,
      meta: {
        requiresAuth: true
      }
    }, {
      path: 'home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }, 
    }, {
      path: 'browse',
      name: 'browse',
      component: Browse,
      meta: {
        requiresAuth: true
      }, 
    }]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/errors/404')
  }
]
