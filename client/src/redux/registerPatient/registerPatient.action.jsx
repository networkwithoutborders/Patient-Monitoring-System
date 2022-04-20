import types from "./registerPatient.types";
import * as utils from "./registerPatient.utils";

export const registerNewPatient = (...args) => ({
	type: types.REGISTER_NEW_PATIENT,
	payload: utils.registerNewPatient(...args),
});
