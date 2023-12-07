import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import userReducer from "./redux/userReducer";


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>
   
  </React.StrictMode>,

)
