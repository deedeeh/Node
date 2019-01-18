const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('This user is visiting: ' + req.url)
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  } else if(req.url === '/profile') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/profile.html').pipe(res)
  } else if(req.url === '/skills') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const skills = {
      programmingLanguages: ['Ruby', 'JavaScript'],
      frameworks: ['Ruby on Rails', 'React', 'Express.js'],
      libraries: ['JQuery', 'Bootstrap'],
      databases: ['PostgresSQL', 'SQLite'],
      Others: ['Node.js', 'TDD', 'OOP', 'Version Control/Git', 'Command Line']
    }
    res.end(JSON.stringify(skills))
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sorry page not found!');
  }
})

server.listen(port, console.log('Server is running!'));
