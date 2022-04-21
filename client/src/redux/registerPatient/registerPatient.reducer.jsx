import types from "./registerPatient.types";

const INITIAL_STATE = { details: "" };

const registerPatientReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.REGISTER_NEW_PATIENT:
			return {
				details: action.payload,
			};

		default:
			return state;
	}
};

export default registerPatientReducer;
