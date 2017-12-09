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
                res.render('googlemap', {
                    ulur: [{lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187}],
                    pageTitle: "ok"
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
    
    */                     
});

app.listen(process.env.PORT || 3000);