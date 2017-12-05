import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import ArticleBoard from './apps/evaluation/evaluation';
import App from 'app'
import Home from './apps/home';


const ReactDOM = require('react-dom');

ReactDOM.render(
    (
    <Router  history={ browserHistory }>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="evaluation" component={ArticleBoard} />
        </Route>
    </Router>
),
    document.getElementById("app")
);