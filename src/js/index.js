import React from 'react'
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router-dom'
import App from './components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App}/>
        </div>
    </Router>,
    document.getElementById("root")
);


