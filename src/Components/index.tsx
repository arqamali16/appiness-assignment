/**
 * @author Mohammed Arqam Ali Saad
 * Index for Component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/antd.css';
import '../../src/index.css';

import { createStore } from 'redux';
import { employeeReducer } from '../Redux/EmployeeReducer';

/** Creating store using Reducer */
const store = createStore(employeeReducer as any);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root'),
);
