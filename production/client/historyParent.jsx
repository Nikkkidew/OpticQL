import React, { useReducer } from 'react';
import { Context, initialState, reducer } from './store.jsx';
import NavBar from './navBar.jsx';
import HistoryView from './historyView.jsx'

const HistoryParent = () => {

	const [store, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<Context.Provider value={{ store, dispatch }}>
				<NavBar />
				<div id='mainContainer'>
					<div className="quadrant">
						<HistoryView />
					</div>
				</div>
			</Context.Provider>
		</div>
	)
}

export default HistoryParent;
