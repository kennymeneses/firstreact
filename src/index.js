import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from 'redux-persist';
import {rootReducer} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer, applyMiddleware(thunk));
// let persistor = persistStore(store);


// ReactDOM.render(<Provider store={store}>
//                     <PersistGate loading={null} persistor={persistor}>
//                         <App />
//                     </PersistGate>
//                 </Provider>, document.getElementById('root'));
