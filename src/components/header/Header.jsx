import React from 'react';
import {Link} from 'react-router-dom';

 const Header = props => (
	<div>
		{/* <img src="" alt=""/> */}
		<h1>SHELFIE</h1>
		<Link to='/'><button>Dashboard</button></Link>
		<Link to='/add'><button>Add Inventory</button></Link>
	</div>
)

export default Header