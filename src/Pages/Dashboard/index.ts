import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = (state: any) => {
	const { dashboard } = state;
	return {
		users: dashboard.users,
	};
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
