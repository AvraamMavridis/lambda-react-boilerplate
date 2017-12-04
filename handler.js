'use strict';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./components/App');

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

module.exports.hello = (event, context, callback) => {


  const res = {
    body: `<style>body{ background: red; }</style>${ReactDOMServer.renderToString(<App />)}`,
    headers: {
      'Content-Type': 'text/html',
    },
    statusCode: 200
  }

  callback(null, res)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
