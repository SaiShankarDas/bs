import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/common/Loader';

// Lazy load pages for code splitting
// Lazy load pages for code splitting
const SplashPage = lazy(() => import('./pages/SplashPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const UttarakhandPage = lazy(() => import('./pages/UttarakhandPage'));
const HimachalPage = lazy(() => import('./pages/HimachalPage'));
const KashmirPage = lazy(() => import('./pages/KashmirPage'));
const ChoptaItineraryPage = lazy(() => import('./pages/ChoptaItineraryPage'));
const ShangarhItineraryPage = lazy(() => import('./pages/ShangarhItineraryPage'));
const TrekRegistrationPage = lazy(() => import('./pages/TrekRegistrationPage'));
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
            <Route path="/" element={<SplashPage />} />
            
            <Route element={<Layout />}>
              <Route path="/udaipur" element={<HomePage />} />
              <Route path="/uttarakhand" element={<UttarakhandPage />} />
              <Route path="/himachal" element={<HimachalPage />} />
              <Route path="/himachal/register" element={<TrekRegistrationPage />} />
              <Route path="/himachal/shangarh" element={<ShangarhItineraryPage />} />
              <Route path="/kashmir" element={<KashmirPage />} />
              <Route path="/uttarakhand/chopta-tungnath" element={<ChoptaItineraryPage />} />
              <Route path="/uttarakhand/register" element={<TrekRegistrationPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/stays" element={<StaysPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/tour-registration" element={<TourRegistrationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
