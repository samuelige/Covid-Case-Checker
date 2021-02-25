import casesActionType from "../types/casesActionType";

const fetchCases = (payload) => ({
    type : casesActionType.FETCHCASES,
    payload : payload
})

export default fetchCases