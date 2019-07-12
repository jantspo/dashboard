import Link from "next/link";
import { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import Router from "next/dist/client/router";

export default function Header({ user, eventHandler }) {
    const [menuOpen, toggleMenu ] = useState(false);

    const navbarStyle = {
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2B6FA2 !important',
        width: '100% !important',
        zIndex: 5
    };

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search" />
                        <button className="btn search-button my-2 my-sm-0" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </form>
                </Nav>
                <Nav>
                    <a href="" style={{padding: "4px 0 0 0"}}>
                        <i className="fas fa-plus-circle fa-2x" />
                    </a>
                    <NavDropdown title="User Name" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <style jsx>
                {`
                
                    .navbar{
                        background-color: #2B6FA2 !important;
                        width: 100% !important;
                        z-index: 5;
                        position: fixed;
                        bottom: 0
                    }
                    
                    .menu-toggle{
                         color: #F05F40;
                    }
                    
                    .menu-button{
                        margin-left: 15px;
                        margin-right: 15px;
                        -webkit-transition-duration: .25s;
                        -moz-transition-duration: .25s;
                        -o-transition-duration: .25s;
                        transition-duration: .25s;
                        -webkit-transition-property: -webkit-transform;
                        -moz-transition-property: -moz-transform;
                        -o-transition-property: -o-transform;
                        transition-property: transform;
                    }
                    
                    .rotate-menu-button{
                        transform: rotate(90deg)
                    }
                `}
            </style>
        </Navbar>
    );
}