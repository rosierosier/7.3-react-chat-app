console.log("Hello World!");
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var ChatApp = require('./components/index.jsx').ChatApp;
// var MessageListing = require('./components/listing.jsx');
var models = require('./models/message');
var userModels = require('./models/user');


var newMessageCollection = new models.MessageCollection();
// var MessageView = Message.MessageListing;
// var MessageView = ChatApp.MessageView;
// var LogInView = ChatApp.MessageView;


ReactDOM.render(
  <ChatApp collection={newMessageCollection}/>,
  // <MessageView collection={newMessageCollection}/>,
  // <LogInView collection={newUserCollection}/>,
  document.getElementById('chat')
);

newMessageCollection.fetch();
