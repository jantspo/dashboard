import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Link from 'next/link';

const NavbarDiv = styled.div`
    width: 240px;
    height: calc( 100vh - 60px);
    background-color: #2C6EA2;
    z-index: 2;
    margin-top: 60px;
    position: fixed;
`;

const LinkWrapper = styled.div`
    padding-left: 25px;
`;

export default function Navbar({open}) {
    return (
        <NavbarDiv className={ `site-navbar side-menu ${ !open ? 'slide-out' : 'slide-in'}`}>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Link href='/property-list'>
                            <button className="btn btn-link">
                                <i className="fas fa-home property-icons" />Property Details
                            </button>
                        </Link>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <i className="fas fa-chart-bar property-icons"/>Analyze
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <LinkWrapper>
                                <a href="">Comps/Evaluation</a>
                            </LinkWrapper>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <i className="far fa-plus-square property-icons" />Create New
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <LinkWrapper>
                                <a href="">Linked Contact</a>
                                <a href="">Task</a>
                            </LinkWrapper>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            <i className="fas fa-dollar-sign property-icons"/>Financial
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <LinkWrapper>
                                <a href="">Buy</a>
                                <a href="">Mortgage</a>
                                <a href="">Sell</a>
                            </LinkWrapper>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            <i className="fas fa-briefcase property-icons" />Manage
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <LinkWrapper>
                                <a href="">Activity</a>
                                <a href="">Documents</a>
                                <a href="">Photos</a>
                                <a href="">Property Info</a>
                                <a href="">Public Info</a>
                                <a href="">Rehab</a>
                                <a href="">Services</a>
                                <a href="">Utilities</a>
                            </LinkWrapper>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <style>{
                `
                    .slide-in {
                        animation: slide-in 0.5s forwards;
                        -webkit-animation: slide-in 0.5s forwards;
                    }
                    
                    .slide-out {
                        animation: slide-out 0.5s forwards;
                        -webkit-animation: slide-out 0.5s forwards;
                    }
                    
                    .side-menu{
                        transform: translateX(-100%);
                    }
                    
                    @keyframes slide-in {
                        100% { transform: translateX(0%); }
                    }
                    
                    @-webkit-keyframes slide-in {
                        100% { -webkit-transform: translateX(0%); }
                    }
                        
                    @keyframes slide-out {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-100%); }
                    }
                    
                    @-webkit-keyframes slide-out {
                        0% { -webkit-transform: translateX(0%); }
                        100% { -webkit-transform: translateX(-100%); }
                    }
                    
                    .site-navbar {
                       
                    }
                    
                    .site-navbar .card-header {
                        padding: .0 1.25rem;
                        margin-bottom: 0;
                        background-color: rgba( 0, 0, 0, 0) !important;
                    }
                    
                    .site-navbar .card {
                        background-color: rgba( 0, 0, 0, 0);
                        border: none
                    }
                    
                    .site-navbar .card-header .btn, .site-navbar a{
                        display: block;
                        color: #fff
                    }
                    
                    .site-navbar a{
                        padding-left: 40px
                    }
                    
                    .site-navbar .card-header .btn:hover, .site-navbar a:hover {
                        color: #fff
                    } 
                    
                    .site-navbar i.property-icons{
                        color: #fff;
                        margin-right: 25px
                    }  
                `
            }</style>
        </NavbarDiv>
    );
}