import types from "./user.types";
import * as utils from "./user.utils";

export const setUserType = (...args) => ({
	type: types.SET_USER_TYPE,
	payload: utils.setUserType(...args),
});

export const userLogin = (...args) => ({
	type: types.USER_LOGIN,
	payload: utils.loginUser(...args),
});

export const getUserProfile = (...args) => ({
	type: types.GET_USER_PROFILE,
	payload: utils.getUserProfile(...args),
});

export const getPatientHistory = (...args) => ({
	type: types.GET_PATIENT_HISTORY,
	payload: utils.getPatientHistory(...args),
});

export const userLogout = (...args) => ({
	type: types.USER_LOGOUT,
	payload: utils.userLogout(...args),
});
