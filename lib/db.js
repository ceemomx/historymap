var mongo = require('mongoskin');
var db = mongo.db('mongodb://10.10.11.200:27017/map', {"native_parser": true});

db.bind('event');


module.exports = db;

var dataStructor = {
    _id:'aaaa',
    title:'event title',
    content:'event content',
    type:'event type',
    baikeUrl:'baike url',
    wikiUrl: 'wiki url',
    lat:39.999,
    lng:116.444,
    date:20140606,
    img:'img url'
};