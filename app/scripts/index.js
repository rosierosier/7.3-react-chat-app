console.log("Hello World!");
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var Message = require('./components/index.jsx');
var MessageListing = require('./components/listing.jsx');
var models = require('./models/message');
var userModels = require('./models/user');

var newMessageCollection = new models.MessageCollection();
var MessageView = Message.MessageView;


ReactDOM.render(
  <Message collection={newMessageCollection}/>,
  <MessageView collection={newMessageCollection}/>,
  // <LogInView collection={newUserCollection}/>,
  document.getElementById('chat-app')
);

newMessageCollection.fetch();
