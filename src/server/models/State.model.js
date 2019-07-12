const Sequelize = require('sequelize');

module.exports = function (sequelize, DateTypes) {

    const state = sequelize.define("state", {
        id: {type: Sequelize.INTEGER, primaryKey: true},
        name: {type: Sequelize.STRING(30), defaultValue: null},
        country_id: {type: Sequelize.INTEGER, defaultValue: null}
    }, {timestamps: false});

    state.associate = (models) => {
        state.hasMany(models.note, {
            foreignKey: "id",
            as: "state"
        })
    };

    return state;
};