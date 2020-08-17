/**
 * @author Mohammed Arqam Ali Saad
 * Container Component Employess
 */

import { connect } from 'react-redux';
import Employees from './Employees';
import _ from 'lodash';

/** State */
const mapStateToProps = (state: object) => {
	return {
		columns: _.get(state, 'columns', []),
		headers: _.get(state, 'headers', []),
	};
};

/** Passing Actions */
const mapDispatchToProps = (dispatch: any) => {
	return {
		// No actions Required Currently
	};
};

/** Props and Actions */
export default connect(mapStateToProps, mapDispatchToProps)(Employees);
