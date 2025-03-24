<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/Store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './App/Store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Provider store={Store}>
 <App />
 </Provider>
    
  
  </StrictMode>,
)
>>>>>>> d033001 (third)
