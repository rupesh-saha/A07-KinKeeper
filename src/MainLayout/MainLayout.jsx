import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import FooterSection from '../Components/FooterSection/FooterSection';

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
};

export default MainLayout;