import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers';
import App from './App';
import './index.css';


const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId='615943721081-5b1g42tp8jjcdgu0vj28o355jrpr0ied.apps.googleusercontent.com'>
            <App/>
        </GoogleOAuthProvider>
    </Provider>,
    document.getElementById("root")
);

