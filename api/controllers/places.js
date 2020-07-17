var knex = require('../config');
var config = require('../app-config');

exports.index = function(req, res) {
    knex('lieu') .where('type', '=', req.params.type)
        .then(function(rsp){
            res.json({error: false, data: rsp});          
        })
        .catch(function(err){
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            });
        })
};

exports.index2 = function(req, res){
    const name = req.params.name;
    const nameSplit = name.split('_');
    const nameJoin = nameSplit.join(' ');
    knex('lieu') .where('type', '=', req.params.type).
    andWhere('nom', '=', nameJoin)
        .then(function(rsp){
            res.json({error: false, data: rsp});          
        })
        .catch(function(err){
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            });
        })
}

exports.vote = function(req, res){
   
    // res.send({
    //     data : req.body
    // })

    knex('avis').insert(
        {
            UserId: req.body.userId,
            LieuTouristique: req.body.lieuTouristique,
            Note: req.body.note
        })
        .then(function (id) {
            res.json({
                error: false,
                data: id
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });
        

}