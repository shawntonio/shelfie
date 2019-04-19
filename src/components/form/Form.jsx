import React, {Component} from 'react';
import axios from 'axios';

import './Form.css';

export default class Form extends Component {
	state = {
		imgUrl: '',
		name: '',
		price: 0
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		if (id) {
			axios.get(`http://localhost:4000/api/inventory/${id}`)
			.then(res => {
				const {img, name, price} = res.data[0]
				this.setState({
					imgUrl: img,
					name,
					price
				})
			})
			.catch(err => console.log('err', err))
		}
	}

	componentDidUpdate(prevProps) {
		const {id} = this.props.match.params;
		if (prevProps.match.params.id !== id) {
			this.setState({
				imgUrl: '',
				name: '',
				price: 0
			})
		}
	}

	inputHandler = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	addToInventory = () => {
		axios.post(`http://localhost:4000/api/product`, this.state)
		.then(() => {
			this.reset();
			this.props.history.push(`/`);
		})
		.catch(err => console.log('err', err))
	}

	saveChanges = id => {
		axios.put(`http://localhost:4000/api/inventory/${id}`, this.state)
		.then(() => {
			this.props.history.push(`/`);
		})
		.catch(err => console.log('err', err))
	}

	reset = () => {
		this.setState({
			imgUrl: '',
			name: '',
			price: 0
		})
		this.props.history.push(`/`);
	}

	render() {
		const {imgUrl, name, price} = this.state
		const {id} = this.props.match.params

		return(
			<div className="form">
				
				{imgUrl ? <img className="imgBox" src={imgUrl} alt="product"/> :
				<img className="imgBox" src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" alt="none"/>}
			

				<div className="inputs">
					<p>Image URL:</p>
					<input value={imgUrl} name="imgUrl" onChange={this.inputHandler} type="text"/>
					<p> Product Name:</p>
					<input value={name} name="name" onChange={this.inputHandler} type="text"/>
					<p>Price:</p>
					<input value={price} name="price" onChange={this.inputHandler} this type="number"/>
				</div>

				<div className="formButtons">
					<button onClick={this.reset}>Cancel</button>
					{
						id ? 
						<button onClick={() => this.saveChanges(id)} >Save Changes</button> :
						<button onClick={this.addToInventory} >Add to inventory</button>
					}
				</div>
			</div>
		)
	}
}