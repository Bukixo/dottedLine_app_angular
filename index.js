const express = require('express');
const app     = express();
//const dest    = `${__dirname}/public`;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');
const { port, env, dbURI } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

mongoose.connect(dbURI, { useMongoClient: true });

if (env !== 'test') app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(customResponses);
app.use('/api', routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
