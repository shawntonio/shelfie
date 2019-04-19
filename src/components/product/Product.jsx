import React from 'react';
import {Link} from 'react-router-dom';

import './Product.css';

const Product = props =>(
	<div className="product" >
		
		<img src={props.product.img} alt="product"/>
		

		<section className="productInfo">
			
			<div>
				<p>{props.product.name}</p>
				<p>{`$${props.product.price}`}</p>
			</div>

			<div className="productButtons">
				<button className="pbutton" onClick={() => props.deleteProduct(props.id)} >Delete</button>
				<Link to={`/edit/${props.id}`}>
					<button className="pbutton">Edit</button>
				</Link>
			</div>
		</section>	
	</div>
)

export default Product