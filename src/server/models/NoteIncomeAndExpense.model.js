const Bundle = require('./index').Bundle;
const Note = require('./index').Note;

const Sequelize = require('sequelize');

module.exports = function (sequelize, DateTypes) {

    return sequelize.define("note_income_and_expense", {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        bundle_id: {
            type: Sequelize.STRING(100),
            references: {
                model: Bundle,
                key: 'bundle_id'
            }
        },
        note_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Note,
                key: 'id'
            }
        },
        inc_exp_date: {type: Sequelize.DATE},
        transaction_type: {type: Sequelize.ENUM('income', 'expense', 'asset', 'reserve')},
        name: {type: Sequelize.STRING(25)},
        amount: {type: Sequelize.DECIMAL(20, 2)},
        gl: {type: Sequelize.STRING(25)},
        memo: {type: Sequelize.TEXT},
        status: {type: Sequelize.ENUM('active', 'inactive')},
        delete_note: {type: Sequelize.TEXT},
        created_date: {type: Sequelize.DATE},
        modified_date: {type: Sequelize.DATE}
    });
};
