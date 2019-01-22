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
  const jobTitle = capitalize(req.params.jobTitle)
  const interest = capitalize(req.params.interest)
  res.render('customise', {custName: name})
  // , custJob: wordsChecker(jobTitle), custInterest: wordsChecker(interest)})
})

//trying to check if the input is more than one word, camelCase, I need to split it and display it the user 
// wordsChecker = (s) => {
//   let wordsArr = s.split(' ')
//   if(wordsArr.length >= 1) {
//     wordsArr.splice()
//   }
//   console.log(wordsArr.length)
//   return wordsArr.join(' ')
// }

app.listen(3000, console.log('Server is running!'))