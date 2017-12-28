import React, { Component } from 'react';

class BasketFront extends Component {
render() {
	return (
		<div>
			<p>
				{this.props.marques}
			</p>
			<p>
				{this.props.type}
			</p>
			<p>
				{this.props.couleurs}
			</p>
		</div>
	);
}
};



export default BasketFront;