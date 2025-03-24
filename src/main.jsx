import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Store from './app/Store';

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