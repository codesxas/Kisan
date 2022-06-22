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

function* onPostMessage(action) {
  try {
    const response = yield call(() => api.postMessage(action.payload));
    yield put(actions.postMessageSuccess(response));
  } catch (error) {
    yield put(actions.postMessageFail(error.response));
  }
}

function* onGetMessages(action) {
  try {
    const response = yield call(() => api.getMessages(action.payload));
    yield put(actions.getMessagesSuccess(response));
  } catch (error) {
    yield put(actions.getMessagesFail(error.response));
  }
}

function* onGetContactHistory(action) {
  try {
    const response = yield call(() => api.getContactHistory(action.payload));
    yield put(actions.getContactHistorySuccess(response));
  } catch (error) {
    yield put(actions.getContactHistoryFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(types.GET_CONTACTS, onGetContacts);
  yield takeLatest(types.GET_SELECTED_CONTACT, onGetSelectedContact);

  yield takeLatest(types.POST_MESSAGE, onPostMessage);
  yield takeLatest(types.GET_MESSAGES, onGetMessages);
  yield takeLatest(types.GET_CONTACT_HISTORY, onGetContactHistory);
}

export default PostSaga;
