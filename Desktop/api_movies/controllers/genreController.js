const db = require('../database/models');

module.exports = {
    getAll: function (req,res){
        db.Genre.findAll()
        .then(function (result){
            return res.status(200).json(result)
        })
    },
    getId: function (req,res){
        db.Genre.findByPk(req.params.id)
        .then(function (result){
            return res.status(200).json(result)
        })
    },
    create: function (req,res){
        db.Genre.create({ 
            name: req.body.name,
            ranking: req.body.ranking,
            active: req.body.active,
        })
            .then(function (result){
                return res.status(200).json(result);
            })      
            .catch(function (error){
                return res.status(500).json(error);
            })
        
    },

}