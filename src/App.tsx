import React, { lazy, Suspense } from 'react';
// router && hooks
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// lazy load
const About = lazy(() => import('./screen/home/About'));
const Home = lazy(() => import('./screen/home/Home'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Suspense>
  </Router>
);
export default App;
