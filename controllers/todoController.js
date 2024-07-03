var data = [{Item:'get milk'}, {item:'buy window'}, {item:'run'}, {item: 'swim'}];
var bodyParser = require('body-parser');
var urlencodeedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});

    });

    app.post('/todo', function(req, res){
        data.push(req.bodyParser);
        res.json(data);
    });

    app.delete('/todo', function(req, res){
        
    });
};