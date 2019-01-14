const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const friends = ['Paki', 'Shouka', 'Sandy', 'Noosha', 'Riri']

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => 
  res.render('home')
)

app.post('/addFriend', (req, res) => {
  const newFriend = req.body.newFriend
  friends.push(newFriend)
  res.send('You have reached the post request!')
})

app.get('/friends', (req, res) => {
  res.render('friends', {friends: friends})
})



app.listen(port, console.log('Server started!'))