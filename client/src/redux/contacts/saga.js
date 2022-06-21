import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as actions from "./actions";
import * as api from "../../helpers/backend_helper";

function* onGetContacts() {
  try {
    const response = yield call(api.getContacts);
    yield put(actions.getContactsSuccess(response));
  } catch (error) {
    yield put(actions.getContactsFail(error.response));
  }
}

function* onGetSelectedContact(action) {
  try {
    const response = yield call(() => api.getContacts(action.params));
    yield put(actions.getSelectedContactSuccess(response));
  } catch (error) {
    yield put(actions.getSelectedContactFail(error.response));
  }
}

// function* onPostItems(action) {
//   try {
//     const response = yield call(() => api.postItem(action.payload));
//     yield put(actions.postMessageItemSuccess(response));
//   } catch (error) {
//     yield put(actions.postMessageItemFail(error.response));
//   }
// }

// function* onGetHistoryItems() {
//   try {
//     const response = yield call(api.getHistoryItems);
//     yield put(actions.getHistoryItemsSuccess(response));
//   } catch (error) {
//     yield put(actions.getHistoryItemsFail(error.response));
//   }
// }

function* PostSaga() {
  yield takeLatest(types.GET_CONTACTS, onGetContacts);
  yield takeLatest(types.GET_SELECTED_CONTACT, onGetSelectedContact);
  // yield takeLatest(types.POST_ITEMS, onPostItems);
  // yield takeLatest(types.GET_HISTORY_ITEMS, onGetHistoryItems);
}

export default PostSaga;
