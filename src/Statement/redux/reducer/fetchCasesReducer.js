import casesActionType from "../action/types/casesActionType";
import CASES_STATE from "../state/cases";

const fetchCasesReducer = (casesState = CASES_STATE, action) => {

    switch (action.type) {
        case casesActionType.FETCHCASES : 
            return {
                ...casesState,
                cases : action.payload
            };
            default:
                return casesState
    }
}

export default fetchCasesReducer