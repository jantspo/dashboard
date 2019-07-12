const Notes = require('../controllers/notes.controller');
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.use(bodyParser.json());

router.get('/api/notes', async (req, res)=> {
    const notes = await Notes.findAll();
    res.status(200).json(notes);
});

router.get('/api/note/:id', async(req, res) => {
    try{
        const note = await Notes.findById(parseInt(req.params.id));
        res.status(200).json(note);
    }catch(error){
        res.status(500).error(error);
    }

});



module.exports = router;