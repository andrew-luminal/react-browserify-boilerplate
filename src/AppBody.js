import React from 'react';

import ItemEntry from './ItemEntry';

class AppBody extends React.Component {
	render() {
		return (
			<div>
				<h2>Items</h2>
				<ul>
					{this.props.items.map(
						(item) => {
							return (<li key={item.id}>{item.name}</li>);
						}
					)}
				</ul>
				<ItemEntry onAddTodo={this.props.onAddTodo} />
			</div>
		);
	}
}

export default AppBody;