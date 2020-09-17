import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HistoryParent from './historyParent.jsx'
import QuadrantView from './quadrantView.jsx'
import Error from './error.jsx'

const App = () => {

	return (
		<main>
			<Switch>
				<Route path="/" component={QuadrantView} exact />
				<Route path="/history" component={HistoryParent} />
				<Route component={Error} />
			</Switch>
		</main>
	)

}

export default App;
