import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import propertyFields from './ownerFormFields';
import {
    GeneralInput
} from '../Inputs';

export default class PropertyOwnerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...propertyFields};
    }

    componentDidMount() {
        for(let x in this.props.property){
            if(this.props.property.hasOwnProperty(x)){
                this.setState(st => {
                    return { [x]: {...st[x], value: this.props.property[x]}}
                });
            }
        }
    }

    changeHandle = (evt) => {
        const target = this.state[evt.target.dataset.target];
        this.setState({
            [evt.target.dataset.target]: {...target, value: evt.target.value}
        });
    };

    render() {
        const state = this.state;
        return (
            <div className="PropertyDetailForm">
                <form action="">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_name}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_cell}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_home}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_work}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_email}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_bankacc}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_routing}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.owner_social}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.vacant}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div className='actions'>
                                <button className="btn btn-primary">Save & Continue</button>
                            </div>
                        </Col>
                    </Row>
                </form>
                <style jsx>{`
                    .toggle-wrapper{
                        margin-top: 15px;
                        margin-bottom: 15px;
                    }
                    
                    .actions{
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                    }
                `}</style>
            </div>
        )
    }
}