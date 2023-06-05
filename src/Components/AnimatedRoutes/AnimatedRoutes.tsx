import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Resume, Works } from '../../Pages';
import { AnimatePresence } from 'framer-motion';
export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait" >
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/works" element={<Works/>} />
      </Routes>
    </AnimatePresence>
  )
}

