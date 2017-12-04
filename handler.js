'use strict';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./components/App');

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

module.exports.hello = (event, context, callback) => {
  var response = {
    statusCode: 200,
    body: ReactDOMServer.renderToString(<App />),
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      'Content-Type': 'text/html',
    },
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
