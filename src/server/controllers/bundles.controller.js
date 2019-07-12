const Bundle = require('../models/index').bundle;

module.exports = {
    findAll: async() => {
        try{
            return await Bundle.findAll();
        }catch(error){
            return error;
        }
    },

    findById: async(id) => {
        try{
            return await Bundle.findOne({
                where: {
                    id: id
                },
                include: [
                    // {
                    //     model: State,
                    //     as: "state"
                    // },
                    // {
                    //     model: Bundle
                    // }
                ]
            });
        }catch(error){
            console.log(error);
            return error;
        }
    }
};
