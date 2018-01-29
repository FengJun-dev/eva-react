import React from 'react'
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap'


class SignupForm extends React.Component {
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
            <Form horizontal onSubmit={handleSubmit}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign up</Button>
                    </Col>
                </FormGroup>
            </Form>
            );
    }
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

}

export default Signup;



