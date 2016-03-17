var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/message');
var newMessageCollection = new models.MessageCollection();

console.log('Hello Index Component');

var ChatApp = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      username: null
    };
  },

  render: function(){
    return (
      <div>
        <LogInView />
        <MessageView />
      </div>
    );
  }
});

var LogInView = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  displayMessages: function(e){
    console.log('displaying messages');
    e.preventDefault();
    $('.chat-app').toggle('medium', function(){
      $('.chat-app').removeClass('invisible');
    });
  },

  render: function(){
    <div className="log-in-page">
      <div className="log-in-div">
        <form id="login-form" onSubmit={this.displayMessages}>
          <input type="text" name="username" placeholder="Username" id="username" className="" /><br/>
          <input type="password" name="password" placeholder="Password" id="password" className="" /><br/>
          <input type="submit" id="login" value="Log In"/>
        </form>
      </div>
    </div>
  }
});

var MessageView = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    };
  },

  render: function(){
    var messageList = this.props.collection.map(function(model){
      return (
        <Message model={model} key={model.id} />
        );
      });
      return (
        <div className="chat-app invisible">
          <div className="left-side-chat">
            <p className="message-text">{this.props.model.get('message')}</p>
            <p className="timestamp">{this.props.model.get('time')}</p>
          </div>
          <div className="right-side-chat">
            <p className="message-text">{this.props.model.get('message')}</p>
            <p className="timestamp">{this.props.model.get('time')}</p>
          </div>
          <form id="response-form">
            <input type="text" name="reply" placeholder="Reply . . ." id="message-text-input" className="" />
            <input type="submit" id="send-message-button" value="Send"/>
          </form>
        </div>
      );
    }
});

// var MessageListing = React.createClass({
//     return (
//       <div className="wrapper">
//         <div id="header" onClick={this.displayForm}>
//           <button><p>+</p></button>
//         </div>
//         <div id="log-in-page" className="invisible">
//           <FormComponent collection={this.props.collection}/>
//         </div>
//         <div className="image-wrapper">
//           {imageList}
//         </div>
//       </div>
//     )
//   }
// });

module.exports = {
  'ChatApp': ChatApp,
  'MessageView': MessageView,
  'LogInView': LogInView
};
