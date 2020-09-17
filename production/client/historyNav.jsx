import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PassToMeMyRouterHistory extends Component {

	constructor(props) {
		super(props)
		this.redirectToHome = this.redirectToHome.bind(this);
	}

	redirectToHome () {
		const { history } = this.props;
		if (history) history.push('/history');
	}

	render () {
		const { history } = this.props;

		return (
			(history)
				?
				<div>
					<button onClick={this.redirectToHome}>You can go to Home 🥳</button>
				</div>
				:
				<div>Oh, we did not get pathname! 🤔</div>
		);
	}

}

export default withRouter(PassToMeMyRouterHistory);
