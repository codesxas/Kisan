import { all, fork } from "redux-saga/effects";

import PostSaga from "./contacts/saga";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}
