import Link from "next/link";
import React, { useState, Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import { logout } from '../services/auth.service';

const navbarStyle = {
    marginRight: "25px",
    zIndex: 5,
    backgroundColor: "#fff",
    width: "100%",
    position: "fixed",
    boxShadow: "0px 0px 10px #efefef"
};

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
            user: {
                first_name: '',
                last_name: ''
            }
        }
    }

    componentDidMount() {
        this.setState({user: JSON.parse(window.localStorage.getItem('user'))})
    }

    toggleMenu = (status) => {
        this.setState({menuOpen: status})
    };

    handleClick = () => {
        this.toggleMenu(!this.state.menuOpen);
        this.props.eventHandler();
    };


    render(){
        const {menuOpen, user} = this.state;
        return (

            <Navbar expand="lg" style={navbarStyle} className="Header">
                <div className="menu-wrapper">
                    <i className={ `menu-button fas fa-2x menu-toggle ${ menuOpen ? "fa-times": "rotate-menu-button fa-bars"} `}
                       onClick={this.handleClick} />
                </div>
                <Navbar.Brand>
                    <Link href="/">
                        {/*<a>HGM</a>*/}
                        <img src="../static/logo.jpg" width="70" height="30" alt="" />
                    </Link>
                </Navbar.Brand>
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
                        <NavDropdown title={ user.first_name + ' ' + user.last_name} id="basic-nav-dropdown">
                            {/*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <style jsx>
                    {`
                    .search-button{
                        color: #F05F40;
                        background-color: #fff;
                        border-color: #F05F40
                    }
                    
                    .search-button:hover{
                        color: #fff;
                        background-color: #F05F40;
                  
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
                        transform: rotate(180deg)
                    }
                    
                    .menu-wrapper{
                        width: 60px;
                        cursor: pointer
                    }
                      
                `}
                </style>
            </Navbar>
        )
    }

}