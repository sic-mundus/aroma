// Layouts
import MainLayout from 'layouts/main-layout'
import RestoringLayout from 'layouts/restoring-layout'

// Pages
import Profile from 'pages/app/profile'
import People from 'pages/app/people'
import Home from 'pages/app/home'
import Express from 'pages/app/express'

export default [{
    path: '/auth',
    redirect: 'auth/challenge',
    component: () => import('layouts/auth-layout'),
    children: [{
      path: 'challenge',
      name: 'challenge',
      component: () => import('pages/auth/challenge')
    }, 
    {
      path: 'about-you',
      name: 'anagraphic',
      component: () => import('pages/auth/anagraphic')
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
      path: 'express',
      name: 'express',
      component: Express,
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
