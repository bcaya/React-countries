import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import { injectGlobal } from 'styled-components'; 

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
ReactDOM.render(
  <Provider>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
