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
const itemOne = Todo({item: 'take a break'}).save(err => {
  if(err) throw err;
  console.log('item saved successfully!');
});

let data = [
  {item: 'prepare food'},
  {item: 'feed cat'},
  {item: 'practice node.js'}
];

module.exports = function(app) {

  //get a todo 
  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
  });

  //create a todo
  app.post('/todo', urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  //delete a todo
  app.delete('/todo/:item', (req, res) => {
    data = data.filter(todo => todo.item.replace(/ /g, '-') !== req.params.item);
    res.json(data);
  });


}