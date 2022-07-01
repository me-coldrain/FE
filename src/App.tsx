import React, { lazy, Suspense } from 'react';
// router && hooks
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// lazy load
const About = lazy(() => import('./screen/home/About'));
const Home = lazy(() => import('./screen/home/Home'));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);
export default App;
