// src/App.tsx
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';

const STRIP_COUNT = 12;
const PAGES = ['/', '/about', '/skills','/internships', '/projects', '/contact'];
const CYAN = '#176aaaff'; // Hero-section-matching cyan
const BLACK = '#00bcd4'; // Hero-section-matching cyan

const StripTransition = ({ onComplete }: { onComplete: () => void }) => (
  <div className="fixed inset-0 z-[9999] flex flex-row">
    {Array.from({ length: STRIP_COUNT }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{
          duration: 0.6,
          delay: index * 0.06,
          ease: 'easeInOut',
        }}
        onAnimationComplete={index === STRIP_COUNT - 1 ? onComplete : undefined}
        className="h-full"
        style={{
          width: `${100 / STRIP_COUNT}vw`,
          backgroundColor: CYAN,
        }}
      />
    ))}
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const ArrowNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = PAGES.indexOf(location.pathname);

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + PAGES.length) % PAGES.length;
    navigate(PAGES[prevIndex]);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % PAGES.length;
    navigate(PAGES[nextIndex]);
  };

  return (
    <>
      <button
        onClick={goPrev}
        className="fixed left-2 top-1/2 -translate-y-1/2 z-[9998] p-3"
        style={{
          backgroundColor: BLACK,
          color: 'black',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goNext}
        className="fixed right-2 top-1/2 -translate-y-1/2 z-[9998] p-3"
        style={{
          backgroundColor: BLACK,
          color: 'black',
          borderRadius: '9999px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.98)',
        }}
      >
        <ChevronRight size={28} />
      </button>
    </>
  );
};

function App() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(true);
  const [renderPath, setRenderPath] = useState(location.pathname);

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => {
      setRenderPath(location.pathname);
    }, 10);
    return () => clearTimeout(timeout);
  }, [location]);

  const handleTransitionComplete = () => {
    setTransitioning(false);
  };

  return (
    <>
      <Navigation />
      <ArrowNavigation />

      <AnimatePresence mode="wait">
        {transitioning && (
          <StripTransition key={location.pathname} onComplete={handleTransitionComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={{ pathname: renderPath }} key={renderPath}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/internships" element={<PageWrapper><Internships /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
