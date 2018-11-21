import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as en from './i18n/en.json';
import './index.css';

ReactDOM.render(
  <IntlProvider locale="en" messages={ en }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
