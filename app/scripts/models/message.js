var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Message = Backbone.Model.extend({

});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages-rosie',
});

module.exports = {
  'Message': Message,
  'MessageCollection': MessageCollection
};
