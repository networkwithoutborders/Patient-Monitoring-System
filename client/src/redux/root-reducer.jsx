import { combineReducers } from "redux";

import registerPatientReducer from "./registerPatient/registerPatient.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({ registerPatientReducer, userReducer });

export default rootReducer;
