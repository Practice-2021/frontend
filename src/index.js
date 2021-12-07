import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo";
import { ReactSearchKit,  ESSearchApi} from 'react-searchkit';

const searchApi = new ESSearchApi({
  axios: {
    url: 'http://159.253.21.180:4000/employee',
    timeout: 5000,
  }
});



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ReactSearchKit searchApi={searchApi}>
            <App />
          </ReactSearchKit>
        </ApolloProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
