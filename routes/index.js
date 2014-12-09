var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/data/timeLine',function(req,res){
    db.event.distinct('date',function(err,data){
        res.send(data);
    })
});
router.get('/data/marker',function(req,res){
    var query = {};
    if(req.query.date){
        query.date = req.query.date
    }
    db.event.find(query).toArray(function(err, data){
        if(err) return res.send({code:-1, list:[]});
        res.send({code:0,list:data});
    })
});

router.get('/admin', function(req, res){
    res.render('admin')
});

router.post('/admin/addEvent',function(req, res){
    req.body.lat = (+req.body.lat);
    req.body.lng = (+req.body.lng);
    req.body.date = (+req.body.date);
    req.body._id = 'event_' + Math.floor(Math.random()*9) + '_' + Date.now();
    console.log(req.body);
    db.event.insert(req.body,function(err,data){
        if(err) return res.send({code:-1});
        res.send({code:0})
    });
});

module.exports = router;
