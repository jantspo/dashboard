import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";
import styled from "styled-components";

const Body = styled.body`
    min-height: 100vh;
`;

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    />
                    <script src="https://kit.fontawesome.com/fcd180d5f8.js" />
                </Head>
                <Body>
                    <Main />
                    <NextScript />
                </Body>
                <style jsx global>{`
                  h1{
                    font-weight: 300
                  }
                
                  p{
                    font-weight: 300
                  }
                  
                  label{
                    font-weight: 300
                  }
                  
                  .btn{
                    border-radius: 0 !important
                  }
                  
                  .btn-primary {
                    color: #fff;
                    background-color: #2E70A2 !important;
                    border-color: #2E70A2 !important;
                  }
                  
                  .btn-primary:active {
                    color: #fff;
                    background-color: #2E70A2 !important;
                    border-color: #2E70A2 !important;
                  }
                  
                  .btn-primary:hover{
                    background-color: rgba(46,112,162, 0.75) !important;
                    border-color: rgba(46,112,162, 0.5) !important;
                  }
                  
                  .card{
                    border-radius: 0 !important
                  }
                  
                  a{
                    color: #548DD4;
                  }
                `}</style>
            </Html>
        );
    }
}