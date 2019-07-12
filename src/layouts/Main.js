import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';

export default class MainLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    };

    render() {
        return (
            <div>
                <Header eventHandler={this.toggleMenu}
                        user={this.props.user}/>
                <Navbar open={this.state.menuOpen }/>
                <div className="main-content">
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
                <style jsx global>{`
                    .main-content{
                        margin-top: 10px;
                    }
               
                    @media screen and (min-width: 1080px){
                        .main-content{
                            width: 100vw;
                            display: inline-block;
                            position: absolute;
                            top: 60px
                        }
                    }
                    
                    @media screen and (max-width: 1079px){
                        .main-content{
                            width: 100vw;
                            display: inline-block;
                            padding: 0 15px;
                            position: absolute;
                            top: 60px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}