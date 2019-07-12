import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import MainLayout from '../layouts/Main';

function Index(props) {
    return (
        <MainLayout>
            <div className="Index">
                <h1>Index Page</h1>
                <h2>Welcome</h2>
                <style>
                    {`
                        div.Index{
                            height: calc(100vh - 58px);
                            width: 100%;
                        }
                    `}
                </style>
            </div>
        </MainLayout>
    );
}

Index.getInitialProps = async ({ req }) => {
    // const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";

    return {

    };
};

export default Index;