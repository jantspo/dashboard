const Note = require('../models/index').note;
const State = require('../models/index').state;
const Bundle = require('../models/index').bundle;

module.exports = {
    findAll: async() => {
        try{
            return await Note.findAll();
        }catch(error){
            return error;
        }
    },

    findById: async(id) => {
        try{
            return await Note.findOne({
                where: {
                    id: id
                },
                include: [
                    // {
                    //     model: State,
                    //     as: "state"
                    // },
                    {
                        model: Bundle
                    }
                ]
            });
        }catch(error){
            console.log(error);
            return error;
        }
    }
};
