// Importing React library for creating components
import React from 'react';

// Importing ReactDOM for rendering components into the DOM
import ReactDOM from 'react-dom/client';

// Importing the CSS file for styling
import './index.css';

// Importing the main App component
import App from './App';

// Importing a function for measuring web vitals
import reportWebVitals from './reportWebVitals';

// Importing Provider from react-redux for managing state
import { Provider } from 'react-redux';

// Importing the Redux store
import store from "./redux/store"

// Importing AuthProvider from AuthContext for managing authentication
import { AuthProvider } from '../src/components/signup/AuthContext';

// Creating a root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the Provider and AuthProvider
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
);

// Function to measure performance in the app
reportWebVitals();
