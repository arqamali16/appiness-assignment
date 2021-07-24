import { combineReducers } from 'redux';

import form from './form';
import dashboard from './dashboard';

export default combineReducers({
	form,
	dashboard,
});
