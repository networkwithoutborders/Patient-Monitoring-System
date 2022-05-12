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
