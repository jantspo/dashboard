const Sequelize = require('sequelize');

module.exports = function (sequelize, DateTypes) {

    return sequelize.define("user", {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        company_name: {type: Sequelize.STRING(125), defaultValue: null},
        first_name: {type: Sequelize.STRING(25), defaultValue: null},
        initial: {type: Sequelize.STRING(11), defaultValue: null},
        last_name: {type: Sequelize.STRING(25), defaultValue: null},
        address: {type: Sequelize.STRING, defaultValue: null},
        city: {type: Sequelize.STRING(25), defaultValue: null},
        state: {type: Sequelize.STRING(25), defaultValue: null},
        zip: {type: Sequelize.STRING(15), defaultValue: null},
        cell: {type: Sequelize.STRING(15), defaultValue: null},
        email_address: {type: Sequelize.STRING(50), defaultValue: null},
        pass_word: {type: Sequelize.STRING(150), allowNull: false},
        bank_account: {type: Sequelize.STRING(25), defaultValue: null},
        routing: {type: Sequelize.STRING(25), defaultValue: null},
        tax_id: {type: Sequelize.STRING(25), defaultValue: null},
        social: {type: Sequelize.STRING(25), defaultValue: null},
        comm_investment: {type: Sequelize.DECIMAL(5,2), defaultValue: null},
        comm_profits: {type: Sequelize.DECIMAL(5,2), defaultValue: null},
        contact_doc: {type: Sequelize.STRING(25), defaultValue: null},
        status: {type: Sequelize.ENUM('active', 'inactive', 'delete') },
        admin_level: {type: Sequelize.ENUM('Admin', 'Manager', 'Viewer')},
        created: {type: "DATETIME"}
    }, {timestamps: false});
};