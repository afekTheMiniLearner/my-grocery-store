import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { storeConfig } from './store';
import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={storeConfig()}>
      <App />
    </Provider>
  </StrictMode>
);
