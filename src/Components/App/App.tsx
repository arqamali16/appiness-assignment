/**
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 * @description Menu Items
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../Login';
import Employees from '../Employees';

/** App Handling the routing of components */
const App = (props: any) => {
	return (
		<Router>
			<Switch>
				<Route path='/employees' component={Employees} />
				<Route path='/' component={Login} />
			</Switch>
		</Router>
	);
};

export default App;
