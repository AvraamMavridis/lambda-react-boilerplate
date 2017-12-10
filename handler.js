'use strict';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./components/App');
const { PassThrough, Writable } = require('stream');


if (!global._babelPolyfill) {
  require('babel-polyfill');
}

module.exports.hello = (event, context, callback) => {
  const indexHtml = `<div><script type="text/javascript" src="/cool.js"/>`
  console.log(event.path)


  const res = {
    body: indexHtml,
    headers: {
      'Content-Type': 'text/html',
    },
    statusCode: 200
  }

  callback(null, res)
};
