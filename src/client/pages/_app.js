import React from "react";
import App, { Container as NextContainer } from "next/app";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "../components/Navbar";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        if (ctx.req && ctx.req.session.passport) {
            pageProps.user = ctx.req.session.passport.user;
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);
        this.state = {
            user: props.pageProps.user
        };
    }

    test = (changes) => {
        this.setState({[changes.type]: changes.value })
    };

    render() {
        const { Component, pageProps } = this.props;

        const props = {
            ...pageProps,
            user: this.state.user,
            test: this.test
        };
        return (
            <NextContainer>
                <Head>
                    <title>Thoughts!</title>
                </Head>
                <Container>
                    <Jumbotron>
                        <Component {...props} />
                    </Jumbotron>
                </Container>
            </NextContainer>
        );
    }
}

export default MyApp;