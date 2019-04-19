import React from 'react';
import {Link} from 'react-router-dom';

const Product = props =>(
	<div className="product" >
		<section>
			<img src={props.product.imgUrl} alt="product"/>
		</section>

		<section>
			<p>{props.product.name}</p>
			<p>{props.product.price}</p>

			<div className="productButtons">
				<button>Delete</button>
				<Link to={`/edit/${props.id}`}>
					<button>Edit</button>
				</Link>
			</div>
		</section>	
	</div>
)

export default Product