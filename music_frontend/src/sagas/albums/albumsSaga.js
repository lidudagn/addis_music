import { call, put, takeEvery } from "redux-saga/effects";
import { getAlbumsSuccess } from "./albumsSlice";

function* WorkGetAlbumsFetch() {
  const albums = yield call(() =>
    fetch("https://addis-music-one.vercel.app/albums")
  );
  const formattedArtists = yield albums.json();
  yield put(getAlbumsSuccess(formattedArtists));
}

function* albumsSaga() {
  yield takeEvery("albums/getAlbumsFetch", WorkGetAlbumsFetch);
}

export default albumsSaga;
