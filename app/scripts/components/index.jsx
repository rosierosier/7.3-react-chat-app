var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var LinkedStateMixin = require('react-addons-linked-state-mixin');

var models = require('../models/message');
var user = require('../models/user');
var Users = new user.UserCollection();


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
        <MessageView collection={this.props.collection}/>
      </div>
    );
  }
});


var LogInView = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {username: '', password: ''}
  },

  // displayMessages: function(e){
  //   e.preventDefault();
    // console.log('displaying messages');
    // $('.chat-app').toggle('medium', function(){
    //   $('.chat-app').removeClass('invisible');
    // });
  // },

  // handleUserChange: function(e){
  //   this.setState({username: e.target.value});
  // },

  login: function(e){
    e.preventDefault();
    var users = this.props.collection;
    var user = new Users();
    users.create({'username': this.state.username, 'password': this.state.password});
  },
  changeView: function(e){
    e.preventDefault();
    $('.chat-app').toggle('medium', function(){
      $('.chat-app').removeClass('invisible');
    });
  },

  render: function(){
    return (
      <div className="log-in-page">
        <div className="log-in-div">
          <form id="login-form" onSubmit={this.displayMessages}>
            <input type="text" valueLink={this.linkState('username')} name="username" placeholder="Username" id="username" className="" /><br/>
            <input type="password" valueLink={this.linkState('password')} name="password" placeholder="Password" id="password" className="" /><br/>
            <input type="submit" onClick={this.login} id="login" value="Log In"/>
          </form>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<LogInView collection={Users}/>, document.getElementById('chat'));

var MessageItem = React.createClass({
  render: function(){
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

var MessageView = React.createClass({
  // getInitialState: function(){
  //   return {
  //     messages: []
  //   };
  // },

  render: function(){
    var messageItem = this.props.collection.map(function(model){
      var className = models.get('username') == this.props.currentUser ? 'right-side-chat': 'left-side-chat';
      return (
        <div key={model.id}>
          <MessageItem model={model} className={className}/>
        </div>
      );
    });
      return <div>{messageItem}</div>
    }
});


module.exports = {
  'ChatApp': ChatApp,
  'MessageView': MessageView,
  'LogInView': LogInView
};
