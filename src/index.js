import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
// import store from './redux/store';

const store = configureStore({
  reducer: rootReducer,
});
 ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
  );
