var React = require('react'),
	action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			input: ''
		};
	},

	handleInputName: function(e) {
		this.setState({input: e.target.value});
	},

	addItem: function(e) {

		e.preventDefault();

		// send input value to dispatcher
		action.add({
			name: this.state.input
		});

		// reset input to add more items
		this.setState({
			input: ''
		});

	},

	render: function() {
		return (
			<div className='grocery-addItem'>
				<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handleInputName} />
					<button>Add Item</button>
				</form>
			</div>
		);
	}

});