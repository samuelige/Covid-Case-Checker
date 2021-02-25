import { combineReducers } from "redux";
import fetchCasesReducer from '../reducer/fetchCasesReducer'

const rootReducer = combineReducers({
    fetchCasesData : fetchCasesReducer
})

export default rootReducer