import React, { Component } from 'react';
import MainLayout from '../layouts/Main';
import Properties from '../components/PropertyList/Properties';
import PropertyListOptions from '../components/PropertyList/PropertyListOptions';
import LoadingSpinner from '../components/LoadingSpinner';
import ListProperty from "../components/PropertyList/ListProperty";
import Card from 'react-bootstrap/Card';
import Paginator from '../components/Paginator';
import http from '../services/http.service';
import styled from 'styled-components';
import {
    getTotalPages,
    getDisplayedItems,
    getIndex
} from '../services/pagination.helper';
import PropertyInfoForm from "../components/PropertyForms/PropertyInfoForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CardWrapper = styled.div`
        .card{
            margin-bottom: 15px;
        }
    
        .card-body{
            padding: 0;
        }
        
        .card-header{
            display:flex;
            direction: row;
            justify-content: space-between
        }
        
        i{
            color: #548DD4;
            cursor: pointer
        }
        
        i:hover{
           color: #0056b3; 
        }
        
        .PropertyListActions i{
            margin-right: 10px
        }  
  
`;

export default class PropertyList extends Component{
    static async getInitialProps({query}){
        try{
            const res = await http('api/notes');
            const properties = await res.json();
            return {properties};
        }catch(err) {
            console.log(err)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            displayTotal: 25,
            currentPage: 1,
            displayedProperties: [],
            totalPages: 1,
            filterOptionsOpen:false,
            newPropertyFormOpen: false
        }
    }

    componentDidMount() {
        const pages = getTotalPages(this.props.properties.length, this.state.displayTotal);
        this.setState(st => {
            return {
                loading: false,
                displayedProperties: this.props.properties.slice(0, 25),
                totalPages: pages
            }
        });
    }

    updateDisplayedProperties = (page) => {
        const index = getIndex(page, this.state.displayTotal);
        const dispProps = getDisplayedItems(index, this.props.properties, this.state.displayTotal);
        this.setState({
            displayedProperties: dispProps,
            currentPage: page
        })
    };

    updateDisplayTotal = total => {
        const pages = getTotalPages(this.props.properties.length, this.state.displayTotal);
        this.setState(st => {
            return {
                displayTotal: parseInt(total),
                displayedProperties: getDisplayedItems(
                    getIndex(this.state.currentPage, this.state.displayTotal),
                    this.props.properties,
                    this.state.displayTotal
                ),
                totalPages: pages
            }
        });
    };

    openFilterOptions = () => {
      this.setState({
          filterOptionsOpen: !this.state.filterOptionsOpen,
          newPropertyFormOpen: false
      })
    };

    openNewPropertyForm = () => {
        this.setState({
            filterOptionsOpen: false,
            newPropertyFormOpen: !this.state.newPropertyFormOpen
        })
    };

    render() {
        const {
            displayedProperties,
            loading,
            totalPages,
            displayTotal,
            currentPage,
            filterOptionsOpen,
            newPropertyFormOpen
        } = this.state;

        const properties = displayedProperties.map(property => (
            <ListProperty {...property} key={property.id}/>
        ));

        const content = loading ?
            <LoadingSpinner /> :
            <Card>
                <Card.Header>
                    Properties
                    <div className="PropertyListActions">
                        <i className="fas fa-filter" onClick={this.openFilterOptions}/>
                        <i className="fas fa-plus" onClick={this.openNewPropertyForm}/>
                    </div>

                </Card.Header>
                <Card.Body>
                    <div>
                        {filterOptionsOpen &&
                            <PropertyListOptions />
                        }
                        {newPropertyFormOpen &&
                            <div className="PropertyListForm">
                                <Row>
                                    <Col>
                                        <PropertyInfoForm />
                                    </Col>
                                </Row>
                            </div>
                        }
                    </div>
                    <Properties properties={properties}>{properties}</Properties>
                    <Paginator
                        pages={totalPages}
                        displayTotal={displayTotal}
                        activePage={currentPage}
                        updateDisplayTotal={this.updateDisplayTotal}
                        updatePropList={this.updateDisplayedProperties}
                    />
                </Card.Body>
            </Card>;

        return (
            <MainLayout user={this.props.user}>
                <CardWrapper>
                    {content}
                </CardWrapper>
            </MainLayout>
        )
    }
}