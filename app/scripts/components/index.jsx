var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/message');
// var FormComponent = require('./form.jsx');

console.log('Hello Listing');

var Message = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      username: null
    };
  },

  _onName: function(e){
    if (e.nativeEvent.keyCode != 13) return;
    var username = e.target.value;
    this.setState({username: username});
  },

  render: function(){
    return (
      <div>
        <LogInView username={this.state.username} _onName={this._onName}/>
      <MessageView username={this.state.username} />
      </div>
    );
  }

      // <div class="log-in-page">
      //   <div class="log-in-div">
      //     <form id="login-form">
      //       <input type="text" name="username" placeholder="Username" id="username" className="" /><br/>
      //       <input type="password" name="password" placeholder="Password" id="password" className="" /><br/>
      //       <input type="submit" id="login" value="Log In"/>
      //     </form>
      //   </div>
      // </div>


  //     <div className="image-caption-div">
  //       <div className="image-div">
  //         <p className="message-text"{this.props.model.get('message')}></p>
  //         <p className="timestamp">{this.props.model.get('time')}</p>
  //       </div>
  //       <div className="caption-div">
  //         <p>
  //           {this.props.model.get('caption')}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
});

var LogInView = React.createClass({
  render: function(){
    var view;
    var username = this.props.username;
    if (username) {
      view = <h1>Welcome {username}</h1>
    } else {
      view = <input onKeyPress={this.props._onName} placeholder="Please enter your username to get started with chatapp!" />
    }
    return view;
  }
});

var MessageView = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    };
  },

  render: function(){
    if (!this.props.username) var style={display: none}
    return (
      <div style={style}>
        <input placeholder="Type a message" onKeyPress={this._onMessage} />
      </div>
    );
  }
});

// var MessageListing = React.createClass({
//   mixins: [Backbone.React.Component.mixin],
//
//   displayForm: function(e){
//     console.log('displaying form');
//     e.preventDefault();
//     // $('#form').toggle('medium', function(){
//     //   $('#form').removeClass('invisible');
//     // });
//   },
//
//   render: function(){
//     var messageList = this.props.collection.map(function(model){
//       return (
//         <Message model={model} key={model.id} />
//         );
//     });
//
//     return (
//       <div className="wrapper">
//         <div id="header" onClick={this.displayForm}>
//           <button><p>+</p></button>
//         </div>
//         <div id="form" className="invisible">
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
  'Message': Message,
  'MessageView': MessageView,
  'LogInView': LogInView
};
