import thunk from "redux-thunk"
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import watcherSaga from "../../redux-saga/root-saga/rootSaga";

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()

// add other middlewares
const middleware = [thunk, logger];

// mount it on the Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

// then run the saga
// sagaMiddleware.run(watcherSaga);

export default store
