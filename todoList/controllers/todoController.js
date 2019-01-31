module.exports = function(app) {

  //get a todo 
  app.get('/todo', (req, res) => {
    res.render('todo');
  });

  //create a todo
  app.post('/todo', (req, res) => {

  });

  //delete a todo
  app.delete('/todo', (req, res) => {

  });


}