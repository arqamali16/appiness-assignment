/**
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 * Protected Route Component
 */
import React from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../Components/Form';
import Card from '../../Components/Card';

const Login = (props: any): React.ReactElement => {
	const history = useHistory();

	const { setUserDetails } = props;

	const onSubmit = (values: any) => {
		const { username, password } = values;
		if (username === 'hruday@gmail.com' && password === 'hruday123') {
			setUserDetails(values);
			history.push('/dashboard');
		} else {
			alert('Entered username/password is incorrect');
		}
	};

	return (
		<div className='align-center'>
			<Card>
				<h3 className='login-title'>Login</h3>
				<Form onSubmit={onSubmit} />
			</Card>
		</div>
	);
};

export default Login;
