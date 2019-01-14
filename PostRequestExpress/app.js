const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => 
  res.render('home')
)

app.post('/addFriend', (req, res) => {
  res.send('You have you reached the post route!')
})

app.get('/friends', (req, res) => {
  const friends = ['Paki', 'Shouka', 'Sandy', 'Noosha', 'Riri']
  res.render('friends', {friends: friends})
})



app.listen(port, console.log('Server started!'))