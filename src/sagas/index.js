import { delay } from "redux-saga/effects";
import { takeLatest, put, takeEvery, all } from "redux-saga/effects";

function* upAsync() {
  yield delay(2000);
  yield put({ type: "UP", value: 1 });
}
function* downAsync() {
  yield delay(2000);
  yield put({ type: "DOWN", value: 1 });
}
function* UPDownAsync() {
  yield put({ type: "UP", value: 3 });
  yield put({ type: "DOWN", value: 1 });
}

export function* watchUp() {
  yield takeLatest("UP_ASYNC", upAsync);
}
export function* watchDown() {
  yield takeEvery("DOWN_ASYNC", downAsync);
}
export function* watchUpDown() {
  yield takeEvery("UP_DOWN_ASYNC", UPDownAsync);
}
export default function* rootSaga() {
  yield all([watchUp(), watchDown(), watchUpDown()]);
}
