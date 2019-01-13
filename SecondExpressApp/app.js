const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi there, welcome to my assignment!'))

//More efficient way of doing the animals route.
app.get('/speak/:animal', (req, res) => {
  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'MEOW'
  }
  const animal = req.params.animal.toLowerCase()
  res.send(`The ${animal} says "${sounds[animal]}"`)
})

//MY FIRST SOLUTION
// app.get('/speak/:animal', (req, res) => {
//   switch(req.params.animal.toLowerCase()) {
//     case 'pig':
//       res.send('Oink')
//       break;
//     case 'cow':
//       res.send('Moo')
//       break;
//     case 'dog':
//       res.send('Woof Woof!')
//       break;
//     default:
//       res.send('Sorry, cannot find your animal!')
//   }
// })

app.get('/repeat/:word/:num', (req, res) => {
  const word = req.params.word + ' '
  const repeatedWord = word.repeat(Number(req.params.num))
  return res.send(repeatedWord)
})

app.get('*', (req, res) => res.send('Sorry, page not found...'))

app.listen(port)