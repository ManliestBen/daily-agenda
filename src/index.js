import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'

import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../node_modules/mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();