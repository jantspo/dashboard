import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";

function Index(props) {
    return (
        <Container>
            <h1>Index</h1>
        </Container>
    );
}

Index.getInitialProps = async ({ req }) => {
    const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";

    return {

    };
};

export default Index;