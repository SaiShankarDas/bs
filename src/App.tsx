import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/common/Loader';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const StaysPage = lazy(() => import('./pages/StaysPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const TourRegistrationPage = lazy(() => import('./pages/TourRegistrationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const location = useLocation();

  return (
    <>
      {/* Optimized Fixed Background Layer */}
      <div className="fixed-bg-layer" />
      
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="tours" element={<ToursPage />} />
              <Route path="stays" element={<StaysPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="tour-registration" element={<TourRegistrationPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
