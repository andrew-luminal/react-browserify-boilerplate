import React from 'react';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			items: [
				{
					id: 1,
					name: 'Wash dishes',
					done: false
				},
				{
					id: 2,
					name: 'Mop floors',
					done: false
				}
			]
		};

		this.onAddTodo = this.onAddTodo.bind(this);
	}

	onAddTodo(value) {
		let newTodo = {
			id: Math.random()*10000000,
			name: value,
			done: false
		};

		let newItems = this.state.items;
		newItems.push(newTodo);
		this.setState({items: newItems});
	}

	render() {
		return (
			<div>
				<AppHeader />
				<AppBody items={this.state.items}
								 onAddTodo={this.onAddTodo} />
			</div>
		);
	}
}

export default App;