import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

function PropertyDetailOverview({property_address, city, state, zip, built_year, sq_ft, bundle_id}) {
    return (
        <div className="PropertyDetailOverview">
            <Card>
                <Card.Header>
                    {`${property_address}, ${city},  ${zip}`}
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <Image src="https://via.placeholder.com/650" fluid />
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Year Built</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Lot Size Sq. Ft</div>
                                        <div>{sq_ft}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Air Conditioning</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>County</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Parcel #</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Entity/Bundle</div>
                                        <div>{bundle_id}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Group ID</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>NAR Value</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Purchase $</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Acquire Date</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Lockbox</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Neighborhood score</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Title Status</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={4}>
                                    <div className='field'>
                                        <div>Occupancy</div>
                                        <div>{built_year}</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='PropertyDetailOverviewButtons'>
                        <Col xs={12} sm={6} md={3}>
                            <label htmlFor="">Lead Source</label>
                            <select className="custom-select" name='leadSource'>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <label htmlFor="">Deal Type</label>
                            <select className="custom-select">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <label htmlFor="">Stage</label>
                            <select className="custom-select">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <label htmlFor="">Status</label>
                            <select className="custom-select">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <style>{`
                .field{
                    display: flex;
                    flex-direction: column;
                    font-weight: 300;
                    margin-bottom:15px;
                }
                
                .PropertyDetailOverviewButtons{
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    )
}

export default PropertyDetailOverview;