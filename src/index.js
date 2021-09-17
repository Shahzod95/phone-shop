import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Loader from "react-loader-spinner";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
