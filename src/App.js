import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';
import HousesPage from './pages/HousesPage';
import About from './pages/About';
import { FloatingWhatsApp } from './components/FloatingWhatsapp';
import ProjectPersonalized from './pages/ProjectPersonalized';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/contato' element={<ContactPage />} />
        <Route path='/projetos-disponiveis' element={<HousesPage />} />
        <Route path='/projeto-personalizado' element={<ProjectPersonalized />} />
        <Route path='/obras-em-andamento' element={<HousesPage />} />
        <Route path='/sobrenos' element={<About />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+553499860-7766"
        accountName="Carlos Junior"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
};

export default App;
