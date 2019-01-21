const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

app.get('/customise/:name/:jobTitle/:interest', (req, res) => {
  const name = capitalize(req.params.name)
  const jobTitle = req.params.jobTitle
  const interest = req.params.interest
  res.render('customise', {custName: name, custJob: jobTitle, custInterest: interest})
})

app.listen(3000, console.log('Server is running!'))