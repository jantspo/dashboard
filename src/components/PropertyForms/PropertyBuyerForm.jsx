import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import propertyFields from './buyerFormFields';
import {
    GeneralInput,
    DatepickerInput,
    SelectInput,
    MoneyInput
} from '../Inputs';
import http from '../../services/http.service';

export default class PropertyBuyerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...propertyFields, bundles: []};
    }

    async componentDidMount() {
        for(let x in this.props.property){
            if(this.props.property.hasOwnProperty(x)){
                this.setState(st => {
                    return { [x]: {...st[x], value: this.props.property[x]}}
                });
            }
        }
        let res = await http('api/bundles');
        let bundles = await res.json();
        this.setState({bundles: [...bundles]})
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
            <div className="PropertyBuyerForm">
                <form action="">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <DatepickerInput {...state.purchase_date}
                                             changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.id}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.bundle_id}
                                         options={this.state.bundles}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12}>
                            <hr/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_company}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_fname}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_lname}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_address}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_city}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.buyer_state}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_zip}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_phone}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.buyer_email}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.buyer_amount}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.buyer_reserve}
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