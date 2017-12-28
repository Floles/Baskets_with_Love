import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasketFront from './BasketFront';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			baskets: [],
		};
	}
	
componentDidMount() {
	axios.get('http://localhost:3000')
		.then((response) => {
		console.log(response);
		this.setState({ baskets: response.data });
		})
		.catch((error) => {
		console.log(error);
	});
}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p>
					{this.state.baskets.map(basket => <BasketFront marques={basket.marques} type={basket.type} couleurs={basket.couleurs} />)}
				</p>
			</div>
		);
	}
}

export default App;
