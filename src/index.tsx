import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; 

import { ingredientsReducer } from './store/reducers/ingredients';

import App from './App';
import * as en from './i18n/en.json';
import './index.css';

const rootReducer = combineReducers({
  ingredientsSlice: ingredientsReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={ store }>
    <IntlProvider locale="en" messages={ en }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
