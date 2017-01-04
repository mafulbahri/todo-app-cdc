require('./src/app.js');
require('angular-mocks');

var testsContext = require.context('./spec', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
