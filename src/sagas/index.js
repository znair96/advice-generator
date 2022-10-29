import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchAdvice } from "../actions/fetchAdvice";

async function fetchAdviceAPI() {
  const advice = await axios.get("https://api.adviceslip.com/advice");
  return advice.data.slip;
}

function* fetchAdviceWorkerSaga() {
  try {
    const advice = yield call(fetchAdviceAPI);
    yield put(fetchAdvice(advice));
  } catch (error) {
    yield put(fetchAdvice(error));
  }
}

function* fetchAdviceWatcherSaga() {
  yield takeLatest("LOAD_ADVICE", fetchAdviceWorkerSaga);
}

export default function* rootSaga() {
  yield all([fetchAdviceWatcherSaga()]);
}
