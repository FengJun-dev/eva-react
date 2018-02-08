import React from 'react';
import Login from './login';
import Signup from './signup';
import {Switch, Route} from 'react-router-dom'

export default class Account extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/account/login" component={Login} />
                <Route exact path="/account/signup" component={Signup} />
            </Switch>
        )
    }
}