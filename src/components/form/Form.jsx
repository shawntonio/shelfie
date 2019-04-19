import React, {Component} from 'react';

export default class Form extends Component {
	state = {
		imgUrl: '',
		name: '',
		price: 0
	}

	inputHandler = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		})
	}

	reset = () => {
		this.setState({
			imgUrl: '',
			name: '',
			price: 0
		})
	}

	render() {
		const {imgUrl, name, price} = this.state
		return(
			<div>
				<div className="imgBox">
					{imgUrl ? <img src={imgUrl} alt="product"/> :
					<img src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png" alt="none"/>}
				</div>

				<div className="inputs">
					<h3>Image URL:</h3>
					<input value={imgUrl} name="imgUrl" onChange={this.inputHandler} type="text"/>
					<h3> Product Name:</h3>
					<input value={name} name="name" onChange={this.inputHandler} type="text"/>
					<h3>Price:</h3>
					<input value={price} name="price" onChange={this.inputHandler} this type="number"/>
				</div>

				<div className="formButtons">
					<button onClick={this.reset}>Cancel</button>
					<button>Add to inventory</button>
				</div>
			</div>
		)
	}
}