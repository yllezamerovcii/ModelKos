import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to React 18 API
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './translation/i18n'; // Ensure this path is correct

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
