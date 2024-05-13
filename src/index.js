import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM from client-specific module.
import "./index.css"; // Importing styles for the index file.
import App from "./App"; // Importing the main App component.
import { Provider } from "react-redux"; // Importing Provider from React Redux for state management.
import store from "./app/store"; // Importing the Redux store configuration.

// Creating a root using ReactDOM.createRoot for concurrent mode rendering.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component wrapped in a Redux Provider to provide store access.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
