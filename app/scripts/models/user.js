var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var User = Backbone.Model.extend({
  defaults: {
    'username': '',
    'password': ''
  }
});
var UserCollection = Backbone.Collection.extend({
  model: User,
  // url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages-rosie',
});

module.exports = {
  'User': User,
  'UserCollection': UserCollection
};
