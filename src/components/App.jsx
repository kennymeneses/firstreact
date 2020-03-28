import React from 'react';
import '../App.css';
import AppRoutes from './AppRoutes';
import  { Provider }  from "react-redux"
import store from '../redux/store'
import { getTallerList } from '../redux/actionCreators'
import { PersistGate } from 'redux-persist/integration/react'
import {createStore} from 'redux'



store.dispatch(getTallerList())

const App = () => (

    <Provider store={store}>

        <AppRoutes />

    </Provider>
  )

export default App;
