import React from 'react';
import Table from 'react-bootstrap/Table';


export default function (props){
    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Address</th>
                <th>City</th>
                <th>State/Prov</th>
                <th>Zip Code</th>
                <th>Created</th>
                <th>Modified</th>
                <th>Stage</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            { props.children }
            </tbody>
        </Table>
    )
}