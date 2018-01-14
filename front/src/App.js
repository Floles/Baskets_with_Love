import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasketFront from './BasketFront';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marques:"",
			type:"",
			couleurs:"",
			baskets: [],
		};
	}

updateList(){
	axios.get('http://localhost:3000')
		.then(response => {
		console.log(response);
		this.setState({ baskets: response.data });
		})
		.catch((error) => {
		console.log(error);
	});
}
componentDidMount() {
	this.updateList();
}

handleSubmit(e) {
	e.preventDefault();
	axios.post('http://localhost:3000/create', {
		marques : this.state.marques,
		type: this.state.type,
		couleurs: this.state.couleurs
	})
		.then(result => {
			this.setState ({
				marques: "",
				type: "",
				couleurs: ""
			})
			this.updateList();
		})
		.catch(err => {
			console.log(err);
		})
}

handleChange(e) {
	this.setState ({
		marques: e.target.value
	})
}

handleChange1(e){
	this.setState ({
		type: e.target.value
	})
}

handleChange2(e){
	this.setState ({
		couleurs: e.target.value
	})
}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Fan de baskets</h1>
				</header>
				<div>
					{this.state.baskets.map(basket => <BasketFront marques={basket.marques} type={basket.type} couleurs={basket.couleurs} />)}
				</div>
				<form onSubmit={ this.handleSubmit.bind(this) }>
					<div>
					<label>Marques</label>
						<input type="text" value={ this.state.marques } onChange={ this.handleChange.bind(this) } required/>
					</div>
					<div>
					<label>Type</label>
						<input type="text" value={ this.state.type } onChange={ this.handleChange1.bind(this) } required/>
					</div>
					<div>
					<label>Couleurs</label>
						<input type="text" value={ this.state.couleurs } onChange={ this.handleChange2.bind(this) } required/>
					</ div>
					<button type="submit">Ajouter</button>
				</form>
			</div>
		);
	}
}

export default App;
