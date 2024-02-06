import Song from "../Components/SongCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSongsFetch } from "../sagas/songs/songsSlice";


const Body = styled.div`
  margin-top:90px;
  background: white;
  border-radius: 4px;
  padding: 0px 24px 32px 24px;
 
`;

export default function Songs() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <Layout>

      <Body>
        {songs.map((song) => (
          <Song song={song} />
        ))}
      </Body>
    </Layout>
  );
}
