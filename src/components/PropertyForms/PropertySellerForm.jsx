import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import propertyFields from './sellerFormFields';
import {
    GeneralInput,
    DatepickerInput,
    SelectInput,
    MoneyInput
} from '../Inputs';

export default class PropertySellerForm extends Component {
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
            <div className="PropertySellerForm">
                <form action="">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <DatepickerInput {...state.sales_date}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_company}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_fname}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_lname}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_address}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_city}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.seller_state}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_zip}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_phone}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.seller_email}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.sales_amount}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.sales_type}
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