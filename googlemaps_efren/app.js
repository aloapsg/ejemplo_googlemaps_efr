/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , ConvProvider = require('./PuntosProvider').PuntosProvider;

var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var puntosProvider= new PuntosProvider('localhost', 27017);
//Routes
//index, usará cemp

app.get('/googlemapp', function(req,res){ 
    
    puntosProvider.findAll(function(error, puntos){
                    num = puntos.length;
                    res.render('googlemap', {
                        title: 'titulo',
                        marcadores: puntos,
                        total: num
                    });
                });
    
    
                });
    
    //cuando ya no esten los puntos:
    /*
    
    puntosProvider.findAll(function(error, puntos){
                    num = puntos.length;
                    res.render('googlemap', {
                        title: 'titulo',
                        marcadores: puntos,
                        total: num
                    });
                });
    
                         
}); */

app.listen(process.env.PORT || 3000);