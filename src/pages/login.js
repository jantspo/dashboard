import React, { Component } from 'react';
import Router from "next/dist/client/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { login } from '../services/auth.service';

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;  
    background: rgba(0, 0, 0, .7);
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const RightAlignedDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CenterAlignedDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            transitioning: false,
            loginSuccess: false,
            user: null
        }
    }

    componentDidMount() {
        window.localStorage.clear();
    }

    submit = async (event) => {
        event.preventDefault();

        const body = {
            email_address: this.state.email,
            pass_word: this.state.password
        };

        const res = await login(body);

        if(res.status !== 200) {
            console.log('error');
        } else {
            this.setState({
                transitioning: true,
                loginSuccess: true,
                user: await res.json()
            }, () => {
                window.localStorage.setItem('user', JSON.stringify(this.state.user));
            });
            setTimeout(() => {
                Router.push(`/property-list?user=${JSON.stringify(this.state.user)}`, `/property-list`);
            }, 1500);
        }
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleLoginStatus = () => {
        const user = this.state.user;
        return this.state.loginSuccess ? <h2>Welcome back, { user.first_name } { user.last_name } !</h2> : this.generateForm();
    };

    generateForm = () => {
        return (
            <Form onSubmit={this.submit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        required
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
                        required
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </Form.Group>
                <RightAlignedDiv>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </RightAlignedDiv>
                <CenterAlignedDiv>
                    <a href="javascript:;">Forget Password?</a>
                </CenterAlignedDiv>
            </Form>
        )
    };

    render() {

        const loginForm = this.handleLoginStatus();

        return (
            <PageWrapper className={this.state.transitioning ? 'fade-out' : ''}>
                <Container>
                    <Row>
                        <Col lg={{span: 4, offset: 4}}
                             md={{span: 8, offset: 2}}
                             sm={{span: 10, offset: 1}}>
                            <Card>
                            <Card.Body>
                                <LogoWrapper>
                                    <img src="../static/logo.jpg" alt="HGM"/>
                                </LogoWrapper>
                                {loginForm}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <style>
                    {`
                        .fade-out{
                           -webkit-transition: background-color 1.5s ease-out;
                          -moz-transition: background-color 1.5s ease-out;
                          -o-transition: background-color 1.5s ease-out;
                          transition: background-color 1.5s ease-out;
                          background: rgba(255, 255, 255, 1);
                        }
                        
                        .card{
                            border: none !important;   
                        }
                    `}
                </style>
            </PageWrapper>
        )
    }
}
