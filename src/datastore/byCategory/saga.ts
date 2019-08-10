import { takeEvery } from "redux-saga/effects";
import { createAction } from "../utils";

const FETCH_ADVANCED_SEARCH_DATA = "FETCH_ADVANCED_SEARCH_DATA";

export const actionCreators = {
  fetchAdvancedSearchData: (pageNumber: number = 0) =>
    createAction(FETCH_ADVANCED_SEARCH_DATA, { pageNumber })
};

function* fetchUser(
  action: ReturnType<typeof actionCreators.fetchAdvancedSearchData>
) {
  const { pageNumber } = action.payload;
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  // } catch (e) {
  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(FETCH_ADVANCED_SEARCH_DATA, fetchUser);
}

export default mySaga;
