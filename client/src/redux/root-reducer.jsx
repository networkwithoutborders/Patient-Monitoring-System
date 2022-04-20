import { combineReducers } from "redux";

import registerPatientReducer from "./registerPatient/registerPatient.reducer";

const rootReducer = combineReducers({ registerPatientReducer });

export default rootReducer;
