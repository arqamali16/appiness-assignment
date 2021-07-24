import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' render={() => <Login />} />
				<ProtectedRoute exact path='/dashboard' render={() => <Dashboard />} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
