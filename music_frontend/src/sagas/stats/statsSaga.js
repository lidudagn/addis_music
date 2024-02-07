import { call, put, takeEvery } from "redux-saga/effects";
import { getStatsSuccess } from "./statsSlice";


function* WorkGetStatsFetch() {
  const stats = yield call(() => fetch("https://addis-music-api.vercel.app/stats",
headers: {    'Access-Control-Allow-Origin': '*', 
  },}
  ));
  const formattedStats = yield stats.json();
  console.log(formattedStats)
  yield put(getStatsSuccess(formattedStats));
}

function* statsSaga() {
  yield takeEvery("stats/getStatsFetch", WorkGetStatsFetch);
}

export default statsSaga;
