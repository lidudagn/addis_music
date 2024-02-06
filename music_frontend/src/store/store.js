import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import statsReducer from "../sagas/stats/statsSlice";
import statsSaga from "../sagas/stats/statsSaga";
import songsSaga from "../sagas/songs/songsSaga";
import songsReducer from "../sagas/songs/songsSlice";
import genresSaga from "../sagas/genres/genresSaga";
import genresReducer from "../sagas/genres/genresSlice";
import artistsReducer from "../sagas/artists/artistsSlice";
import artistsSaga from "../sagas/artists/artistsSaga";
import albumsReducer from "../sagas/albums/albumsSlice";
import albumsSaga from "../sagas/albums/albumsSaga";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    stats: statsReducer,
    songs: songsReducer,
    genres: genresReducer,
    artists: artistsReducer,
    albums: albumsReducer,
  },
  middleware: [saga],
});

function* rootSaga() {
  yield all([
    statsSaga(),
    songsSaga(),
    genresSaga(),
    artistsSaga(),
    albumsSaga(),
  ]);
}

saga.run(rootSaga);

export default store;
