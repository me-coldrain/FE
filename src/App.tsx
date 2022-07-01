import React, { lazy, Suspense } from 'react';
// router && hooks
import { Header } from './Components/Header';
import Navigator from './Navigation/Navigator';
// lazy load
const About = lazy(() => import('./screen/home/About'));
const Home = lazy(() => import('./screen/home/Home'));

const App: React.FC = () => (
  <>
    <Header />
    <Navigator />
    <div>
      <text>test</text>
    </div>
  </>
);
export default App;
