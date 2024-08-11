export const all = ['admin', 'editor', 'user', 'guest'];
export const dashboard = ['admin', 'editor'];
export const auth = ['admin', 'editor', 'user'];
export const admin = ['admin'];

export const adminRoutes = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    href: '/dashboard'
  },
  {
    name: 'User List',
    icon: 'user',
    href: '/dashboard/users'
  },
  {
    name: 'Post List',
    icon: 'post',
    href: '/dashboard/posts'
  },
  {
    name: 'Page List',
    icon: 'page',
    href: '/dashboard/pages'
  }
];

export const editorRoutes = [
  {
    name: 'Post List',
    icon: 'post',
    href: '/dashboard/posts'
  },
  {
    name: 'Page List',
    icon: 'page',
    href: '/dashboard/pages'
  }
];

export const userRoutes = [
  {
    name: 'My Profile',
    icon: 'profile',
    href: '/my/profile'
  }
];

export const routes = [
  {
    path: '/',
    access: all
  },
  {
    path: '/404',
    access: all
  },
  {
    path: '/blog',
    access: all
  },
  {
    path: '/about-us',
    access: all
  },
  {
    path: '/contact-us',
    access: all
  },
  {
    path: '/privacy-policy',
    access: all
  },
  {
    path: '/terms-and-conditions',
    access: all
  },
  {
    path: '/profile',
    access: auth
  },
  {
    path: '/dashboard',
    access: dashboard
  },
  {
    path: '/dashboard/posts',
    access: dashboard
  },
  {
    path: '/dashboard/pages',
    access: dashboard
  },
  {
    path: '/dashboard/users',
    access: admin
  }
];
