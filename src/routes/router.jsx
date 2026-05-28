//import { Navigate, Route, Routes } from 'react-router-dom'
// import {page } from '@/routes/index'
// import BlogLanding from '../page/bloglanding'
// const AppRouter = (props) => {
//   return (
//     <Routes>
//       {/* Diğer rota tanımları */}
//       {(page || []).map((route, idx) => (
//         <Route
//           key={idx + route.name}
//           path={route.path}
//           element={<BlogLanding {...props}>{route.element}</BlogLanding>}
//         />
//       ))}
//     </Routes>
//   )
// }
// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Signin from "../page/auth/signin";
import Signup from "../page/auth/signup";
import ResetPasw from "../page/auth/resetpasw";
import Forgotpass from "../page/auth/forgotpass";
import React from "react";
import AppLayout from "../components/AppLayout";
import BlogLanding from "../page/bloglanding";
import BlogApp from "../components/BlogApp";
import { posts } from "../data/posts"; // 👈 buradan veri alınıyor
import BlogPostDetail from "../components/BlogPostDetail";
import MediaPlatform from "../page/layouts/MediaPlatform";
import StreamingPlatform from "../page/layouts/StreamingPlatform";
import EducationPlatformPage from "../page/layouts/EducationPlatformPage";
import LiveStreamPlatformPage from "../page/layouts/LiveStreamPlatformPage";

import EducationPlatform from "../components/EducationPlatform"; // Eğitim sayfası bileşeni
import CreateLiveStream from "../page/CreateLiveStream";
import LivePanel from "../components/livepanel";
import MusicPlatfromPage from "../page/layouts/MusicPlatformPage";
import MusicDetail from "../components/MusicDetail"; // Müzik detay bileşeni
import Landing from "../page/landing/landing";
import MusicProfileDetail from "../components/MusicProfileDetail"; // Sanatçı profili bileşeni


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: < Landing /> },
      { path: '/home', element: <MediaPlatform /> },
      { path: '/blog', element: <BlogLanding /> },
      { path: '/auth/login', element: <Signin /> },
      { path: '/auth/register', element: <Signup /> },
      { path: '/auth/resetpassword', element: <ResetPasw /> },
      { path: '/auth/forgotpass', element: <Forgotpass /> },
      { path: '/blogs', element: <BlogApp posts={posts} /> },
      { path: '/blogs/:id', element: <BlogPostDetail /> },
      { path: '/layouts', element: <MediaPlatform /> },
      { path: '/createlive', element: <CreateLiveStream /> },
      { path: '/live', element: <StreamingPlatform /> },
      { path: '/alt-kategori/Yazilim-Gelistirme', element: <EducationPlatformPage /> },
      { path: '/live/:id', element: <LiveStreamPlatformPage /> },
      { path: 'livepanel', element: <LivePanel /> },
      { path: '/music', element: <MusicPlatfromPage /> },
      { path: '/music/:id', element: <MusicDetail /> },
      { path: "/music/:id/artist", element: <MusicProfileDetail /> },

    ]
  }
]);
