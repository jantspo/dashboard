import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import propertyFields from './propertyFomFields';
import {
    GeneralInput,
    SelectInput,
    MoneyInput,
    PercentInput,
    DatepickerInput,
    FileUploadInput,
    TextAreaInput
} from '../Inputs';
import ToggleButton from '../ToggleButton';

export default class PropertyInfoForm extends Component {
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
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="toggle-wrapper">
                                List as wholesale: <ToggleButton />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.property_address}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.city}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.state}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.zip}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.country}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.property_type}
                                         changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.beds}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.baths}
                                          changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.sq_ft}
                                          changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.garage}
                                          changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.built_year}
                                          changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.rent}
                                          changeHandler={this.changeHandle} />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12}>
                            <GeneralInput {...state.amenenities}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12}>
                            <hr/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.crime}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.occupancy}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.pop}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.upb}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.alp}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.estimation}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.rehab_cost}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.bpo}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            {/*bpo date*/}
                            <DatepickerInput {...state.bpo_date}
                                             changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.tax_due}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <GeneralInput {...state.tax_status}
                                          changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.org_loan}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <PercentInput {...state.int_rate}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.mo_payment}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.lien_position}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            {/*maturity date*/}
                            <DatepickerInput {...state.maturity_date}
                                             changeHandler={this.changeHandle}/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.loan_balance}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <MoneyInput {...state.arrears}
                                        changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            {/*Funding date*/}
                            <DatepickerInput {...state.funding_date}
                                             changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            {/* Note Documents */}
                            <FileUploadInput />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.note_status}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            <SelectInput {...state.note_type}
                                         changeHandler={this.changeHandle} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                            {/* Note Documents */}
                            <FileUploadInput />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {/* Note Documents */}
                            <TextAreaInput {...state.notes}/>
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