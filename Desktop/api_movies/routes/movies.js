const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const db = require('./database/models');
moviesController = require('../controllers/moviesController')

router.get('/',moviesController.getAll);

router.get('/:id' ,moviesController.getId);

router.post('/create' ,moviesController.create);



module.exports = router;
