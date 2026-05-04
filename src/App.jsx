import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Dsa = lazy(() => import('./pages/Dsa'));
const About = lazy(() => import('./pages/About'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300 dark">
        <Navbar />
        <main className="pt-20">
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
