import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ReactDom from 'react-dom';
import App from './components/App';

const store = createStore(()=>[], {}, applyMiddleware());

ReactDom.render(
   <Provider store={store}><App/></Provider>
   , document.querySelector("#root"));
