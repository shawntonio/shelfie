import React, {Component} from 'react';
import axios from 'axios';

import './Dashboard.css'

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

	deleteProduct = id => {
		axios.delete(`http://localhost:4000/api/inventory/${id}`)
		.then(() => this.componentDidMount())
		.catch(err => console.log('err', err))
	}

	render() {
		return(
			<div className="dashboard">
				{this.state.inventory.map(product => (
					<Product deleteProduct={this.deleteProduct} key={product.id} id={product.id} product={product} />
				))}
			</div>
		)
	}
}