var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

PuntosProvider = function(host, port) {
  this.db= new Db('NOMBRE_DE_LA_BD', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


PuntosProvider.prototype.getCollection= function(callback) {
  this.db.collection('NOMBRE_DE_COLECCION', function(error, c_collection) {
    if( error ) callback(error);
    else callback(null, c_collection);
  });
};

PuntosProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, c_collection) {
      if( error ) callback(error)
      else{
          c_collection.find({}).toArray(function(error, results){
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

exports.PuntosProvider = PuntosProvider;