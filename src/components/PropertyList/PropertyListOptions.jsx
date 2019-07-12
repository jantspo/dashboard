import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

const Div = styled.div`
    padding: 10px;
`
;

export default function ({options}){

    return(
        <Div className="PropertyListOptions">
            <Row>
                <Col>
                    <label htmlFor="">Option</label>
                    <select className="custom-select">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Col>
                <Col>
                    <label htmlFor="">Option</label>
                    <select className="custom-select">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Col>
                <Col>
                    <label htmlFor="">Option</label>
                    <select className="custom-select">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Col>
                <Col>
                    <label htmlFor="">Option</label>
                    <select className="custom-select">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Col>
            </Row>
        </Div>
    )
}