import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
