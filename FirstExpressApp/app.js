const express = require('express')
const app = express()
const port = 3000

//order of routes is important so the '*' one should be at the end.
app.get('/', (req, res) => res.send('Hello World'))
app.get('/bye', (req, res) => res.send('Goodbye!'))
app.get('/cat', (req, res) => res.send('MEOW!'))

//Route parameters, they start with colon ':' 
app.get('/r/:redditName/', (req, res) => {
  return res.send(`I am a ${req.params.redditName} reddit`)
})

//can be used for error messages for routes not defined.
app.get('*', (req, res) => res.send('Sorry no route by this name!'))

app.listen(port)