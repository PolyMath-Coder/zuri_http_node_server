const http = require('http');
const { url } = require('inspector');
const fs = require('fs');
const port = 3000;

const indexPage = fs.readFileSync(__dirname + '/pages/index.html');
const aboutPage = fs.readFileSync(__dirname + '/pages/about.html');
const contactPage = fs.readFileSync(__dirname + '/pages/contact.html');

const app = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexPage);
  } else if (urlPath === '/home') {
    res.writeHead(201, {
      Location: 'http://' + req.headers['host'] + '/',
    });
    return res.end();
  } else if (urlPath === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(aboutPage);
  } else if (urlPath === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(contactPage);
  }
});
app.listen(port, () => {
  console.log(`Server is live at port ${port}`);
});
