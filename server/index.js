const path = require('path');
const express = require('express');
const db = require('./db');
const volleyball = require('volleyball')
const syncAndSeed = require('./syncAndSeed')
const PORT = process.env.PORT || 8080;
const app = express();

module.exports = app;
app.use(volleyball)

// static middleware
app.use(express.static(path.join(__dirname, '..', 'dist')));

// body parsing middleware
app.use(express.json());

// 'API' routes
app.use('/api', require('./api/routes'));

// 404 middleware
app.use((req, res, next) =>
    path.extname(req.path).length > 0 ?
        res.status(404).send('Not found') :
        next()
);

// send index.html
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
});

// error handling endware
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

syncAndSeed()
    .then(() => console.log('database synced and seeded'))
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)));

