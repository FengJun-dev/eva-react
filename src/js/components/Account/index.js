import React from 'react';
import Login from './login';
import Signup from './signup';


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