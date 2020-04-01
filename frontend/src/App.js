import React from 'react';
import Routes from './routes/routes';
import './config/reactotron';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import history from './services/history';
import './global.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
