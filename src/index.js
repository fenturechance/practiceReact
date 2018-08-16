import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters'

ReactDom.render(<Counters /> , document.getElementById('root'));
registerServiceWorker();