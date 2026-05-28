import { lazy } from 'react';
import BlogPostDetail from '../components/BlogPostDetail';
import ResetPasw from '../page/auth/resetpasw';

// Pages
const Landing = lazy(() => import('../page/landing/landing'));
const BlogLanding = lazy(() => import('../page/bloglanding'));
const BlogApp = lazy(() => import('../components/BlogApp'));
const Signin = lazy(() => import('../page/auth/signin'));
const Signup = lazy(() => import('../page/auth/signup'));
const Forgotpass = lazy(() => import('../page/auth/forgotpass'));
const ResetPasw = lazy(() => import('../page/auth/resetpasw'));
const MediaPlatform = lazy(() => import('../page/layouts/MediaPlatform'));
const CreateLiveStream = lazy(() => import('../page/CreateLiveStream'));
const LivePanel = lazy(() => import('../components/livepanel'));
export const page = [
  {
    path: '/landing',
    name: 'Landing',
    element: <Landing />,
  },
  {
    path: '/blog',
    name: 'Blog Landing',
    element: <BlogLanding />,
  },
  {
    path: '/blogs',
    name: 'Blog postlar',
    element: <BlogApp />,
  }, {
    path: '/blogs/:blogid',
    name: 'Blog Detay postlar',
    element: <BlogPostDetail />,
  }, {
    path: '/auth/login',
    name: 'Giriş Sayfası',
    element: <Signin />,
  }, {
    path: '/auth/register',
    name: 'Kayıt Sayfası',
    element: <Signup />,
  }, {
    path: '/auth/fotgotpass',
    name: 'sifremi unuttum Sayfası',
    element: <Forgotpass />,
  }, {
    path: '/auth/resetpasword',
    name: 'sifremi Yenileme Sayfası',
    element: <ResetPasw />,

  }, {
    path: '/home',
    name: 'Ana Sayfa',
    element: <MediaPlatform />,
  }, {
    path: '/createlive',
    name: 'Ana Sayfa',
    element: <CreateLiveStream />,
  },
  {
    path: '/livepanel',
    name: 'Yayın Kontrol',
    element: <LivePanel />,
  },

];