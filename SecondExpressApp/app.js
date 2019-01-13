const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi there, welcome to my assignment!'))
app.get('/speak/:animal', (req, res) => {
  switch(req.params.animal) {
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

app.get('/repeat/:word/:num', (req, res) => {
  const word = req.params.word + ' '
  const repeatedWord = word.repeat(req.params.num)
  return res.send(repeatedWord)
})

app.get('*', (req, res) => res.send('Sorry, page not found...'))

app.listen(port)