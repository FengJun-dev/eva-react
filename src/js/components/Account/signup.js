import React from 'react'
import SignupForm from './signupform'

class Signup extends React.Component {
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

    handleSubmit() {
        const data = {
            username : this.state.username,
            nick: this.state.nick,
            password : this.state.password,
            email : this.state.email,
        };
        fetch('http://localhost:8000/account/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(function(data) {
                console.log('request succeeded with JSON response', data)
            })
            .catch(function(error) {
                console.log('request failed', error)
            })
    }

    render() {
        return (
            <SignupForm user={data}/>

        )
    }
}


export default Signup;



