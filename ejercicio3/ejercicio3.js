const http = require('http');
const url = require('url');

const dictionary = [
  "sol", "luna", "mar", "tierra", "estrella",
  "viento", "nube", "rayo", "roca", "bosque",
  "fuego", "agua", "montaña", "trueno", "nieve"
];

function generatePassword(numWords) {
  let words = [];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    words.push(dictionary[randomIndex]);
  }
  return words.join('-');
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true -> parsea query string
  const query = parsedUrl.query;
  const numWords = parseInt(query.x) || 3; // Por defecto 3 palabras

  const password = generatePassword(numWords);

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<h1>Tu contraseña aleatoria es:</h1><p>${password}</p>`);
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
