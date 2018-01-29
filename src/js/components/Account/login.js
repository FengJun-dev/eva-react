import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            nick: '',
            password : '',
            email : '',
        };
        this.handleSubmit = this.handleSubmit().bind(this);
    }


    render() {

    }
}