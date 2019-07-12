const Sequelize = require('sequelize');

module.exports = function (sequelize, DateTypes) {

    const bundle = sequelize.define("bundle", {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        bundle_id: {type: Sequelize.STRING(25)},
        date: {type: Sequelize.DATE},
        total_loan_amount: {type: Sequelize.DECIMAL(20,2)},
        total_notes: {type: Sequelize.INTEGER},
        active_notes: {type: Sequelize.INTEGER},
        sold_notes: {type: Sequelize.INTEGER},
        reserve_amt: {type: Sequelize.DECIMAL(20, 2)},
        balance: {type: Sequelize.DECIMAL(20,2)},
        create_on: {type: "DATETIME"},
        status: {type: Sequelize.ENUM('active', 'inactive', 'delete')},
        delete_note: {type: Sequelize.TEXT}
    }, { timestamps: false });

    bundle.associate = (models) => {
        bundle.hasMany(models.note, {
            foreignKey: "bundle_id"
        })
    };

    return bundle;
};