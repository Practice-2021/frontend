import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
