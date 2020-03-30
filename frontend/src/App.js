import React from 'react';
import Routes from './routes/routes';
import { Router } from 'react-router-dom';
import history from './services/history';
import './global.css';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;
