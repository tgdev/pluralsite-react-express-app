var React = require('react'),
	ReactDOM = require('react-dom'),
	GroceryItemList = require('./components/GroceryItemList.jsx');

var data = [{
	name: 'Ice Cream'
}, {
	name: 'Waffles'
}, {
	name: 'Candy',
	purchased: true
}, {
	name: 'Fruit'
}];

ReactDOM.render(<GroceryItemList items={data} />, app);