import { call, put, takeEvery } from "redux-saga/effects";
import { getArtistsSuccess } from "./artistsSlice";

function* WorkGetArtistsFetch() {
  const artists = yield call(() =>
    fetch("https://addis-music-frontend.vercel.app/artists")
  );
  const formattedArtists = yield artists.json();
  yield put(getArtistsSuccess(formattedArtists));
}

function* artistsSaga() {
  yield takeEvery("artists/getArtistsFetch", WorkGetArtistsFetch);
}

export default artistsSaga;
