import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { CalendarApp } from './CalendarApp.jsx';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CalendarApp />
  </Provider>
);
