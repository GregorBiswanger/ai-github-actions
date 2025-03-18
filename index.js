const http = require('http');

const jokes = [
  'Warum benutzen Programmierer keine Sonnenbrillen? Weil sie keine Bugs im Code sehen wollen!',
  'Warum sind Computer so schlau? Weil sie immer auf dem neuesten Stand sind!',
  'Warum können Java-Entwickler keine Pausen machen? Weil sie immer im "try" Block sind!',
  'Warum sind Programmierer so schlecht im Tennis? Weil sie immer "null" zurückgeben!',
  'Warum können Entwickler keine Geheimnisse bewahren? Weil sie immer alles debuggen!',
  'Warum sind Computer so gut im Singen? Weil sie perfekte "Bytes" haben!',
  'Warum benutzen Programmierer keine Sonnenbrillen? Weil sie keine Bugs im Code sehen wollen!',
  'Warum sind Computer so schlau? Weil sie immer auf dem neuesten Stand sind!',
  'Warum können Java-Entwickler keine Pausen machen? Weil sie immer im "try" Block sind!',
  'Warum sind Programmierer so schlecht im Tennis? Weil sie immer "null" zurückgeben!',
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
