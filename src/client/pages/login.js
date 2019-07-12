import React, { Component } from 'react';
import Router from "next/dist/client/router";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submit = async (event) => {
        event.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if(res.status !== 200) {
            console.log('error');
        } else {
            Router.push("/share-thought")
        }

        // Router.push("/");
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.submit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Share
                    </Button>
                </Form>
            </Container>
        )
    }
}
