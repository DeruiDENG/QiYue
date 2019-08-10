import { createStore, Store, compose, applyMiddleware } from "redux";
import { reducers } from "./index";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

let store: Store = null;

export function getStore() {
  if (store) {
    return store;
  }

  const sagaMiddleware = createSagaMiddleware();
  store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  sagaMiddleware.run(mySaga);
  return store;
}

export function createAction<T extends string, Payload>(
  type: T,
  payload: Payload
): { type: T; payload: Payload } {
  return {
    type,
    payload
  };
}
