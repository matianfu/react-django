
var React = require('react');

var SignIn = React.createClass({

    render: function() {
        return (
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" />
                <button onClick={this.props.onAuthComplete.bind(null, this._doAuth)}>Sign In</button>
            </div>
        );
    },

    _doAuth: function() {
        console.log("auth: _doAuth()");
        return true;
    }
});

module.exports = SignIn;

