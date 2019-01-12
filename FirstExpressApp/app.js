const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/bye', (req, res) => res.send('Goodbye!'))
app.get('/cat', (req, res) => res.send('MEOW!'))
app.listen(port)