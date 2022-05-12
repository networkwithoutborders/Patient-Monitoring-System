import types from "./user.types";

const INITIAL_STATE = { userType: "" };

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_USER_TYPE:
			return {
				userType: action.payload,
			};

		case types.USER_LOGIN:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
