const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middleware = jsonServer.defaults({
	readOnly: true,
});

server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
	console.log('Server is running on http://localhost:3000');
});