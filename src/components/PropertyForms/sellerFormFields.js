export default {
    sales_date: {
        value: '' ,
        required:true,
        name: 'Sales Date',
        propertyName: 'sales_date'
    },
    seller_company: {
        value: '' ,
        required:true,
        name: 'Company Name',
        propertyName: 'seller_company'
    },
    seller_fname: {
        value: '' ,
        required:true,
        name: 'First Name',
        propertyName: 'seller_fname'
    },
    seller_lname: {
        value: '' ,
        required:true,
        name: 'Last Name',
        propertyName: 'seller_lname'
    },
    seller_address: {
        value: '' ,
        required:true,
        name: 'Address',
        propertyName: 'seller_address'
    },
    seller_city: {
        value: '' ,
        required:true,
        name: 'City',
        propertyName: 'seller_city'
    },
    seller_state: {
        value: '' ,
        required:true,
        name: 'State',
        propertyName: 'seller_state',
        options: []
    },
    seller_zip: {
        value: '' ,
        required:true,
        name: 'Zip',
        propertyName: 'seller_zip'
    },
    seller_phone: {
        value: '' ,
        required:true,
        name: 'Phone',
        propertyName: 'seller_phone'
    },
    seller_email: {
        value: '',
        required:true,
        name: 'Email Address',
        propertyName: 'seller_email'
    },
    sales_amount: {
        value: '',
        required:true,
        name: 'Sales Amount',
        propertyName: 'sales_amount'
    },
    sales_type: {
        value: '',
        required: true,
        name: 'Sales Type',
        propertyName: 'sales_type',
        options: [
            {name: 'Foreclosure'},
            {name: 'Performing'}
        ],
        field: 'name'
    }
};