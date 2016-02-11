
var React = require('react');
var SignIn = require('./signin.jsx');
var Logout = require('./logout.jsx');

var App = React.createClass({

    getInitialState: function() {
        return { signedIn: false }
    },

    render: function() {
        return (
            <div>
                <h1>Hello React!!!</h1>
                {this.state.signedIn ? <Logout onLogout={this._onLogout} /> : <SignIn onAuthComplete={this._onAuthComplete} />}
            </div>
        );
    },

    _onAuthComplete: function( result ) {

        if (result()) {
            this.setState( { signedIn: true } );
        }
    },

    _onLogout: function() {
        console.log("app: _onLogout");
        this.setState( { signedIn: false } );
    }
});

module.exports = App;

