import React, {Component} from 'react';
import axios from 'axios';

import Product from '../product/Product';

export default class Dashboard extends Component {
	state = {
		inventory: []
	}

	componentDidMount() {
		axios.get(`http://localhost:4000/api/inventory`).then(res => {
			this.setState({inventory: res.data})
		}).catch(err => console.log('err', err))
	}

	render() {
		return(
			<div>
				{this.state.inventory.map(product => (
					<Product key={product.id} id={product.id} product={product} />
				))}
			</div>
		)
	}
}