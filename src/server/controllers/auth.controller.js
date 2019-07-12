const User = require('../models/index').user;

module.exports = {
    find: async(email) => {
        return await User.findOne({ where: {email_address: email}});
    },
};