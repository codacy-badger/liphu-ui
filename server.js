// server.js
const app = require('express')();
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const consola = require('consola');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(history());
app.use(serveStatic(__dirname + '/site/dist'));

app.listen(port, host);

consola.ready({
	message: `Server listening on http://${host}:${port}`,
	badge: true
});
