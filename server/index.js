const http = require('http');
const fs = require('fs');

const port = 8000;

const server = http.createServer((req, res) => {
  let filePath = '';

  if (req.url === '/') {
    filePath = 'public/index.html';
    res.end('Halaman Utama');
  } else if (req.url === '/cars') {
    filePath = 'public/cars.html';
    res.end('Halaman Mobil');
  } else {
    filePath = 'public' + req.url;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

server.listen(port, 'localhost', () => {
  console.log(`Server is running, open http://localhost:${port}`);
});
