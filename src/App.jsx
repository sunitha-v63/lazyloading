import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Task1 from './assets/Components/Task1';
import Task5 from './assets/Components/Task5';
import Task10 from './assets/Components/Task10';
import Task11 from './assets/Components/Task11';
import Task12 from './assets/Components/Task12';
import Task13 from './assets/Components/Task13';
import Task14 from './assets/Components/Task14';
import Task15 from './assets/Components/Task15';

const Header = lazy(() => import('./assets/Components/Header'));
const Footer = lazy(() => import('./assets/Components/Footer'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Task1 />
        <main>
          <h4>content area</h4>
          <h3>Default Import: Import components normally without lazy loading. </h3>
        </main>
        <Task5 />
        <h6>task7</h6>
        <h3>Multiple Lazy Components: Lazy load both Header and Footer components with Suspense.</h3>
       <Task10/>
       <Task11/>
       <Task15/>
       <Task12/>
       <Task14/>
       <Task13/>
       
       <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
