const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const urlencodedParser = bodyParser.urlencoded({extended: false});

//connect to the database 
mongoose.connect(process.env.MLAB_URI, { useNewUrlParser: true });

//create a schema
const todoSchema = new mongoose.Schema({
  item: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app) {

  //get a todo 
  app.get('/todo', (req, res) => {
    //get data from mongodb and pass it to the view
    Todo.find({}, (err, data) => {
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  //create a todo
  app.post('/todo', urlencodedParser, (req, res) => {
    //get data from the view and add it to mongodb
    Todo(req.body).save((err, data) => {
      if(err) throw err;
      res.json(data);
    });
  });

  //delete a todo
  app.delete('/todo/:item', (req, res) => {
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
      if(err) throw err;
      res.json(data)
    });
  });


}