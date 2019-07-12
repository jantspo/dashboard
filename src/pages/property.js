import React, { Component } from 'react';
import PropertyLayout from '../layouts/PropertyLayout';
import PropertyDetailOverview from '../components/PropertyDetail/PropertyDetailOverview';
import PropertyDetailPanel from '../components/PropertyDetail/PropertyDetailPanel';
import http from '../services/http.service';

class Property extends Component{
    static async getInitialProps({query}) {
        try{
            const res = await http(`api/note/${query.id}`);
            const property = await res.json();
            console.log(property);
            return {property}
        }catch(err){
            console.log(err);
        }
    }

    render() {
        return (
            <PropertyLayout user={this.props.user}>
                <PropertyDetailOverview {...this.props.property}/>
                <PropertyDetailPanel property={this.props.property}/>
            </PropertyLayout>
        )
    }
}

export default Property;