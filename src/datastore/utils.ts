import {
  createStore,
  Store,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./byCategory/saga";
import { reducers as searchModeReducers } from "./searchMode";
import { reducers as advancedSearchReducers } from "./advancedSearch";
import { reducers as byCategorySearchReducers } from "./byCategory";

let store: Store = null;

export function getStore() {
  if (store) {
    return store;
  }

  const sagaMiddleware = createSagaMiddleware();
  const reducers = combineReducers({
    mode: searchModeReducers,
    advancedSearch: advancedSearchReducers,
    byCategorySearch: byCategorySearchReducers,
  });
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
      reducers,
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
  }

  sagaMiddleware.run(mySaga);
  return store;
}

export function createAction<T extends string, Payload>(
  type: T,
  payload: Payload
): { type: T; payload: Payload } {
  return {
    type,
    payload,
  };
}
