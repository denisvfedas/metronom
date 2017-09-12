import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronom from './Metronom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Metronom />, document.getElementById('root'));
registerServiceWorker();
