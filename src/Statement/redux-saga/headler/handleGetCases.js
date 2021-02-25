import { call, put } from 'redux-saga/effects'
import fetchCases from '../../redux/action/creator/casesActionCreator';

import requestGetCases from "../request/getCase";



function* handleGetCases(action) {
    try {
        const response = yield call(requestGetCases);
        const {data} = response;
        yield put(fetchCases(data))
    } catch (error) {
        console.log(error);
    }
}



export default handleGetCases