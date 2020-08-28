const express = require('express');
const router = express.Router();

genreController = require('../controllers/genreController');

router.get('/',genreController.getAll);

router.get('/:id' ,genreController.getId);

router.post('/create' ,genreController.create);



module.exports = router;