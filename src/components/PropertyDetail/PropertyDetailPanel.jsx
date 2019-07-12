import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import PropertyDetailActivity from './PropertyDetailActivity';
import PropertyDetailForms from './PropertyDetailForms';
import PropertyDetailNegotiation from './PropertyDetailNegotiation';
import PropertyDetailListing from './PropertyDetailListing';
import PropertyDetailLinkedContacts from './PropertyDetailLinkedContacts';

export default function ({property}) {
    const [tabContent, setTabContent] = useState(<PropertyDetailActivity />);
    const changeContent = (evt) => {
        switch(evt.target.type){
            case 'activity':
                setTabContent(<PropertyDetailActivity />);
                break;
            case 'property':
                setTabContent(<PropertyDetailForms property={property} />);
                break;
            case 'negotiation':
                setTabContent(<PropertyDetailNegotiation />);
                break;
            case 'listing':
                setTabContent(<PropertyDetailListing />);
                break;
            case 'linkedContacts':
                setTabContent(<PropertyDetailLinkedContacts />);
                break;
            default:
                setTabContent(<PropertyDetailActivity />);
                break;
        }
    };

    return (
        <div className='PropertyDetailPanel'>
            <Card>
                <Card.Body>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link"
                               href="javascript:;"
                               data-toggle="tab"
                               role="tab"
                               type='activity'
                               onClick={changeContent}>Activity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               href="javascript:;"
                               data-toggle="tab"
                               role="tab"
                               type='property'
                               onClick={changeContent}>Property</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               href="javascript:;"
                               data-toggle="tab"
                               role="tab"
                               type='negotiation'
                               onClick={changeContent}>Negotiation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               href="javascript:;"
                               data-toggle="tab"
                               role="tab"
                               type='listing'
                               onClick={changeContent}>Listing</a>
                        </li>
                    </ul>
                    {tabContent}
                </Card.Body>
            </Card>
            <style jsx>{`
                .PropertyDetailPanel{
                    margin-top: 15px
                }
                
                .content{
                    padding-top: 15px
                }
            `}</style>
        </div>

    )
}