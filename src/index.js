import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Statement/redux/store/store';


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Enable concurrent mode

// const rootElement = document.getElementById("root");
// ReactDOM.unstable_createRoot(rootElement).render(
//   <Provider store = {store}>
//      <Router>
//        <React.StrictMode>
//            <App />
//       </React.StrictMode>
//     </Router>
//   </Provider>
// );



