import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const PropertySideNavDiv = styled.div`
    width: 240px;
    height: calc( 100vh - 60px);
    background-color: #fff;
    display: inline-block;
    position: fixed;
    margin-top: 60px;
    box-shadow: rgb(239, 239, 239) 0px 0px 10px;
    margin-top: 40px;
    
    .card-header {
        padding: .0 1.25rem;
        margin-bottom: 0;
        background-color: rgba( 0, 0, 0, 0) !important;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    
    .card {
        background-color: rgba( 0, 0, 0, 0);
        border: none;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-clip: border-box;
    }
    
    .card-header .btn, a{
        display: block;
        color: #2B6FA2
    }
    
    a{
        padding-left: 40px
    }
    
    .card-header .btn:hover, a:hover {
        color: #2B6FA2
    } 
    
    i.property-icons{
        color: #F05F40;
        margin-right: 25px
    }  
`;

const LinkWrapper = styled.div`
    padding-left: 25px;
`;

export default function PropertySideNav() {
    return (
        <PropertySideNavDiv>
            <Accordion>
                <Card>
                    <Card.Header>
                        <button className="btn btn-link">
                            <i className="fas fa-home property-icons" />Property Details
                        </button>
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

        </PropertySideNavDiv>

    );
}