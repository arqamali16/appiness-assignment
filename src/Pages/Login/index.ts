import { connect } from 'react-redux';
import { setUserDetails } from '../../Redux/Actions';
import Login from './Login';

const mapStateToProps = (state: any, ownProps: any) => {
	const { form } = state;
	console.log(state, ownProps);
	return {
		username: form.username,
		password: form.password,
	};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
	setUserDetails: (value: any) => dispatch(setUserDetails(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
