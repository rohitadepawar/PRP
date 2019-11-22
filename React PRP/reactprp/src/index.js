import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/common/header';
import App from './containers/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('body'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
