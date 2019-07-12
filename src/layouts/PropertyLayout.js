import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PropertyNav from '../components/PropertyNav/PropertyNav';

export default class PropertyLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    };

    render() {
        return (
            <div>
                <Header eventHandler={this.toggleMenu}
                        user={this.props.user}/>
                <Navbar open={this.state.menuOpen }/>
                <div className="Main-wrapper">
                    <PropertyNav />
                    <div className="main-content">
                        {this.props.children}
                    </div>
                </div>
                <style>{`
                    @media screen and (min-width: 1080px){
                        .main-content{
                            width: calc(100vw - 240px);
                            display: inline-block;
                            position: absolute;
                            top: 60px;
                            padding: 15px;
                            left: 240px;
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