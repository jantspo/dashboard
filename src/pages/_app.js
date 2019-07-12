import React from "react";
import App, { Container as NextContainer } from "next/app";
import Head from "next/head";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        if(ctx.query && ctx.query.user) {
            pageProps.user = JSON.parse(ctx.query.user);
        }else if (ctx.req && ctx.req.session.passport) {
            pageProps.user = ctx.req.session.passport.user;
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);
        this.state = {
            user: {
                first_name: '',
                last_name: ''
            }
        };
    }

    componentDidMount() {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if(user) this.setState({user: user});
    }

    render() {
        const { Component, pageProps } = this.props;
        const props = {
            ...pageProps
        };
        return (
            <NextContainer>
                <Head>
                    <title>Thoughts!</title>
                </Head>
                <Component {...props} />
            </NextContainer>
        );
    }
}

export default MyApp;