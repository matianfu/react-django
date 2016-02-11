var React = require('react');

var Logout = React.createClass({

    render: function() {
        return (
            <a href="#" onClick={this.props.onLogout}>Logout</a>
        );
    }
});

module.exports = Logout;

