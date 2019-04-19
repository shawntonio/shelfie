import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

 const Header = props => (
	<div className="header">
		{/* <img src="" alt=""/> */}
		<h2>SHELFIE</h2>
		<Link to='/'><button>Dashboard</button></Link>
		<Link to='/add'><button>Add Inventory</button></Link>
	</div>
)

export default Header