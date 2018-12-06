const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const errorsEventsRoute = require('./routes/errorsEventsRoute');

app.use('/', index);
app.use('/errors_events', errorsEventsRoute);

module.exports = app;
