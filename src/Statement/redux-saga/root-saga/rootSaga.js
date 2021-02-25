import { takeLatest } from 'redux-saga/effects'

import casesActionType from "../../redux/action/types/casesActionType";
import handleGetCases from "../headler/handleGetCases";

function* watcherSaga() {
    yield takeLatest(casesActionType.FETCHCASES, handleGetCases)
}

export default watcherSaga