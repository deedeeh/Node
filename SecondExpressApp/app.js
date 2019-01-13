const express = require('express')
const app = express()
const port = 3000

app.get('/', (resp, res) => res.send('Hi there, welcome to my assignment!'))
app.get('/speak/:animal', (resp, res) => {
  switch(resp.params.animal) {
    case 'pig':
      res.send('Oink')
      break;
    case 'cow':
      res.send('Moo')
      break;
    case 'dog':
      res.send('Woof Woof!')
      break;
    default:
      res.send('Sorry, cannot find your animal!')
  }
})

app.listen(port)