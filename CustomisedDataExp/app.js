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
  const name = req.params.name
  const jobTitle = req.params.jobTitle
  const interest = req.params.interest
  res.render('customise', {custName: wordsChecker(capitalize(name)), custJob: wordsChecker(jobTitle), custInterest: wordsChecker(interest)})

})

// trying to check if the input is more than one word, camelCase, I need to split it and display it the user 
wordsChecker = (s) => {
  return s.split('').map(char => {
    return char === char.toUpperCase() ? ' ' + char : char
  }).join('')
}

app.listen(3000, console.log('Server is running!'))