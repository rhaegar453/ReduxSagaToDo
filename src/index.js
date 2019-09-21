import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Saga Setup */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import UIReducer from './Store/UIStore/Reducers';


const rootReducer=combineReducers({
    ui:UIReducer
})
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




serviceWorker.unregister();
