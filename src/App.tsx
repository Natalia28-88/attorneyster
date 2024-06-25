import React from 'react';

import 'macro-css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const AboutUs = React.lazy(
  () => import(/* webpackChunkName:"AboutUs" */ './pages/AboutUs')
);

const RecentBlogs = React.lazy(
  () => import(/* webpackChunkName:"RecentBlogs" */ './pages/RecentBlogs')
);

const ContactUs = React.lazy(
  () => import(/* webpackChunkName:"ContactUs" */ './pages/ContactUs')
);

const NotFound = React.lazy(
  () => import(/* webpackChunkName:"NotFound" */ './pages/NotFound')
);

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route
            path="about-us"
            element={
              <React.Suspense fallback={<div>Идет загрузка страницы...</div>}>
                <AboutUs />
              </React.Suspense>
            }
          />

          <Route
            path="recent-blogs"
            element={
              <React.Suspense fallback={<div>Идет загрузка страницы...</div>}>
                <RecentBlogs />
              </React.Suspense>
            }
          />

          <Route
            path="contact-us"
            element={
              <React.Suspense fallback={<div>Идет загрузка страницы...</div>}>
                <ContactUs />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense
                fallback={
                  <div>
                    К сожалению, данная страница отсутствует на нашем сайте...
                  </div>
                }
              >
                <NotFound />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
