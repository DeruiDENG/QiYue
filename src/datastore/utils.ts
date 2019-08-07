import { createStore, Store } from "redux";
import { reducers } from "./index";

let store: Store = null;

export function getStore() {
  if (store) {
    return store;
  }

  store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
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
