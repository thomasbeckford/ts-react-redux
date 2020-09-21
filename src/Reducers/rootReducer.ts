const initialState = {
	counter: 0,
	auth: {
		authenticated: false,
		user: null,
	},
};

function rootReducer(state = initialState, action: any) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1,
			};
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1,
			};
		case 'LOGIN':
			return {
				...state,
				auth: { authenticated: true, user: action.payload },
			};
		case 'LOGOUT':
			return {
				...state,
				auth: { authenticated: false, user: null },
			};
		default:
			return state;
	}
}

export default rootReducer;
