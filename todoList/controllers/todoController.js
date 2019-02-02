const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false});

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