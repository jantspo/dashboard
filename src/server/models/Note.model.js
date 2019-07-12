const Bundle = require('./index').bundle;
const State = require('./index').state;
const Sequelize = require('sequelize');

module.exports = function (sequelize, DateTypes) {
    const note = sequelize.define("note", {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        bundle_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Bundle,
                key: 'bundle_id'
            }
        },
        property_address: {type: Sequelize.TEXT('tiny')},
        country: { type: Sequelize.INTEGER },
        // state: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: State,
        //         key: 'id'
        //     }
        // },
        city: { type: Sequelize.STRING(50) },
        zip: { type: Sequelize.STRING(15)},
        property_image: {type: Sequelize.TEXT},
        property_thumb_image: {type: Sequelize.TEXT},
        latitude: {type: Sequelize.FLOAT(11, 7)},
        longitude: {type: Sequelize.FLOAT(11,7)},
        property_type: {type: Sequelize.ENUM('SFH', 'Mult-Family', 'Lot', 'Land', 'Commercial')},
        beds: {type: Sequelize.INTEGER},
        baths: {type: Sequelize.INTEGER},
        sq_ft: {type: Sequelize.DECIMAL(10,2)},
        garage: {type: Sequelize.INTEGER},
        built_year: {type: 'YEAR'},
        rent: {type: Sequelize.DECIMAL(20,2)},
        amenenities: {type: Sequelize.TEXT},
        crime: {type: Sequelize.STRING(30)},
        alp: {type: Sequelize.DECIMAL(20,2)},
        pop: {type: Sequelize.STRING(30)},
        upb: {type: Sequelize.DECIMAL(20, 2)},
        occupancy: {type: Sequelize.ENUM('Occupied', 'Vacant') },
        estimation: {type: Sequelize.DECIMAL(20, 2)},
        rehab_cost: {type: Sequelize.DECIMAL(20,2)},
        org_loan: {type: Sequelize.DECIMAL(20,2)},
        int_rate: {type: Sequelize.DECIMAL(5,2)},
        mo_payment: {type: Sequelize.DECIMAL(20,2)},
        lien_position: {type: Sequelize.ENUM('1st', '2nd')},
        maturity_date: {type: Sequelize.DATE},
        loan_balance: {type: Sequelize.DECIMAL(20, 2)},
        arrears: {type: Sequelize.DECIMAL(20, 2)},
        funding_date: {type: Sequelize.DATE},
        bpo: {type: Sequelize.DECIMAL(20,2)},
        bpo_date: {type: Sequelize.DATE},
        tax_due: {type: Sequelize.DECIMAL(20, 2)},
        tax_status: {type: Sequelize.STRING(30)},
        pro_document: {type: Sequelize.STRING(200)},
        interest_rate: {type: Sequelize.DECIMAL(10, 2)},
        loan_term: {type: Sequelize.MEDIUMINT},
        note_status: {type: Sequelize.STRING(20)},
        note_type: {type: Sequelize.STRING(20)},
        notes: {type: Sequelize.TEXT},
        vacant: {type: Sequelize.TINYINT},
        purchase_date: {type: Sequelize.DATE},
        sold_date: {type: Sequelize.DATE},
        broker_fee: {type: Sequelize.DECIMAL(20,2)},
        sales_type: {type: Sequelize.ENUM('Forclosure', 'Performing')},
        reserve_amt: {type: Sequelize.DECIMAL(20, 2)},
        note_created: {type: 'DATETIME'},
        status: {type: Sequelize.ENUM('active', 'delete')}
    }, { timestamps: false });

    note.associate = (models) => {
        note.belongsTo(models['state'], {
            foreignKey: "id",
            as: "state"
        });

        note.belongsTo(models['bundle'], {
            foreignKey: "bundle_id"
        });
    };

    return note;
};