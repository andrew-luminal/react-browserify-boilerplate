import React from 'react';

class ItemEntry extends React.Component {
	constructor() {
		super();

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault(); // Don't trigger a page refresh
		let value = e.target.newItem.value;
		
		this.props.onAddTodo(value);

		e.target.newItem.value = "";
	}

	render() {
		return (
			<div>
				Add Item:
				<form onSubmit={this.onSubmit}>
					<input name="newItem" type="text" />
				</form>
			</div>
		);
	}
}

export default ItemEntry;