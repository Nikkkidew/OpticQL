import React from 'react';
import { useHistory, Link, Router, Route } from 'react-router-dom';
import history from "./history.js";
import PassToMeMyRouterHistory from "./historyNav.jsx";

const NavBar = () => {
	// remember to ask patrick and rebecca for the logo code
	const newLocation = (e) => {
		e.preventDefault();
		window.location.href = '/history'
	}

	return (
		<div>
			<Link to="/">Home </Link>
			<button style={{ "backgroundColor": 'white' }}>
				<Link to="/history">Historical Performance</Link>
			</button>

			<PassToMeMyRouterHistory />
			{/* <button onClick={() => history.push('/history')}>goto /history</button> */}
			{/* <button onClick={() => history.push('/')}>goto /</button> 
				Test me
			</button> */}
		</div >
	);
}

export default NavBar;
