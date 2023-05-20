const app = require('express')();
const urls = {};
app.get('/s/:id', (req, res) => { res.redirect(301, urls[req.params.id]) });
app.get('/s', (req, res) => { let id = require("crypto").randomUUID(); urls[id] = req.query.url; res.send(id); });
app.listen(3000);