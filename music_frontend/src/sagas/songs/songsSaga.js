import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";


import {
  deleteSongSuccess,
  updateSong,
  getSongsSuccess,
  postSong,
  postSongSuccess,
} from "./songsSlice";

function* WorkGetSongsFetch() {
  try {
    const songs = yield call(() => fetch("https://addis-music-api.vercel.app/songs"));
    const formattedSongs = yield songs.json();
    yield put(getSongsSuccess(formattedSongs));
  } catch (error) {
    yield put(getSongsError(error));
  }
}
function* workPostSong(action) {
  try {
    console.log(action.payload, "payload");
    const response = yield call(() =>
      fetch("https://addis-music-api.vercel.app/songs", {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
    // Handle the response as needed
  } catch (error) {
console.lconsole.log(error)
  }
}
  console.log(response);
  const isPosting = yield select((state) => state.songs.isPosting);
  if (!isPosting) {
    yield put(postSong());
    const newSong = yield response.json();
    yield put(postSongSuccess(newSong));
  }


function* workDeleteSong(action) {
  const response = yield call(() =>
    fetch(`https://addis-music-api.vercel.app/${action.payload}`, {
      method: "DELETE",
    })
  );
  yield put(deleteSongSuccess(action.payload));
}

function* workUpdateSong(action) {
  const response = yield call(() =>
    fetch(`https://addis-music-api.vercel.app/${action.payload.id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  const isPosting = yield select((state) => state.songs.isPosting);
  if (!isPosting) {
    yield put(updateSong());
  }
}

function* songsSaga() {
  yield takeEvery("songs/getSongsFetch", WorkGetSongsFetch);
  yield takeLatest("songs/postSong", workPostSong);
  yield takeLatest("songs/updateSong", workUpdateSong);
  yield takeEvery("songs/deleteSong", workDeleteSong);
}

export default songsSaga;
