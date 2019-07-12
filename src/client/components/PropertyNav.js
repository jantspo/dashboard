import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Router from "next/dist/client/router";

export default function AppNavbar({ user, test }) {
    const logout = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(res.status !== 200) {
            console.log('error');
        } else {
            test({type: 'user', value: null});
            Router.push("/");
        }

        // Router.push("/");
    };


    const navbarStyle = { marginBottom: "25px" };

    return (
        <Navbar bg="light" expand="lg" style={navbarStyle}>
            <Container>
                <Navbar.Brand>
                    <Link href="/">
                        <a>Thoughts!</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {(
                            <div  className="flex-column">
                                <Link href="/share-thought">
                                    <a className="nav-link">New Thought</a>
                                </Link>
                                <Link href="/profile">
                                    <a className="nav-link">Profile</a>
                                </Link>
                                {/*<Link href="/logout">*/}
                                <a className="nav-link" onClick={logout}>Log Out</a>
                                {/*</Link>*/}
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}