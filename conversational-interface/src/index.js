import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import LandingPage from './LandingPage';
import InteractionsPage from './InteractionsPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

const routing = (
    <Router>
        <div>
            <Route path="" component={App}/>
            
            <Route path="*/ask" component={InteractionsPage}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));



