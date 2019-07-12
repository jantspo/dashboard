const Bundles = require('../controllers/bundles.controller');
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.use(bodyParser.json());

router.get('/api/bundles', async (req, res)=> {
    const notes = await Bundles.findAll();
    res.status(200).json(notes);
});

router.get('/api/bundles/:id', async(req, res) => {
    try{
        const note = await Bundles.findById(parseInt(req.params.id));
        res.status(200).json(note);
    }catch(error){
        res.status(500).error(error);
    }

});



module.exports = router;