import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as actions from "./actions";
import * as api from "../../helpers/backend_helper";

function* onGetItems(action) {
  try {
    const response = yield call(() => api.getItems(action.params));
    yield put(actions.getContactItemsSuccess(response));
  } catch (error) {
    yield put(actions.getContactItemsFail(error.response));
  }
}

function* onPostItems(action) {
  try {
    const response = yield call(() => api.postItem(action.payload));
    yield put(actions.postMessageItemSuccess(response));
  } catch (error) {
    yield put(actions.postMessageItemFail(error.response));
  }
}

function* onGetHistoryItems() {
  try {
    const response = yield call(api.getHistoryItems);
    yield put(actions.getHistoryItemsSuccess(response));
  } catch (error) {
    yield put(actions.getHistoryItemsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(types.GET_ITEMS, onGetItems);
  yield takeLatest(types.POST_ITEMS, onPostItems);
  yield takeLatest(types.GET_HISTORY_ITEMS, onGetHistoryItems);
}

export default PostSaga;
