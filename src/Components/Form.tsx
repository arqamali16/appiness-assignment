import React, { PureComponent } from 'react';

class Form extends PureComponent<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			fields: {},
			errors: {},
		};
	}

	handleValidation = () => {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		//username
		if (!fields['username']) {
			formIsValid = false;
			// @ts-ignore
			errors['username'] = 'Please enter your username!';
		}

		//password
		if (!fields['password']) {
			formIsValid = false;
			// @ts-ignore
			errors['password'] = 'Please enter your password!';
		}

		this.setState({ errors: errors });
		return formIsValid;
	};

	contactSubmit(e: any) {
		e.preventDefault();
		if (this.handleValidation()) {
			this.props.onSubmit(this.state.fields);
		}
	}

	handleChange = (field: any, e: any) => {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	};

	render() {
		return (
			<form name='loginForm' className='form-body' onSubmit={this.contactSubmit.bind(this)}>
				<div className='col-md-6'>
					<input
						ref='username'
						type='text'
						placeholder='Username'
						onChange={this.handleChange.bind(this, 'username')}
						value={this.state.fields['username']}
					/>
					<br />
					<span className='error-msg'>{this.state.errors['username']}</span>
					<br />
					<input
						placeholder='Password'
						type='password'
						onChange={this.handleChange.bind(this, 'password')}
						value={this.state.fields['password']}
					/>
					<br />
					<span className='error-msg'>{this.state.errors['password']}</span>
					<br />
				</div>
				<input type='submit' />
			</form>
		);
	}
}

export default Form;
