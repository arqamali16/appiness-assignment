const initialState = {
	username: '',
	password: '',
};

const form = (state = initialState, action: any) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER_DETAILS':
			return { ...state, username: action.value.username, password: action.value.password };

		default:
			return state;
	}
};

export default form;
