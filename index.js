const http = require('http');

const jokes = [
  'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann!',
  'Warum können Geister keine Lügen erzählen? Weil sie durchsichtige Argumente haben!',
  'Warum haben Elefanten keine Computer? Weil sie Angst vor der Maus haben!',
  'Warum können Skelette keine Partys feiern? Weil sie niemanden haben, mit dem sie tanzen können!',
];

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/jokes') {
    const joke = getRandomJoke();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ joke }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
