import React from 'react';
import './App.css';

import Routes from './routes';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='bodyPrincipal'>
      <Routes />
      </div>
    </div>
  );
}

export default App;
