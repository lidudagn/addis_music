import AlbumCard from "../Components/AlbumCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAlbumsFetch } from "../sagas/albums/albumsSlice";



const Body = styled.div`
margin-top:90px;
  background: white;

  padding: 32px;

  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 12px;
\
`;
export default function Albums() {
  const albums = useSelector((state) => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsFetch());
  }, [dispatch]);

  return (
    <Layout>

      <Body>
        {albums.map((album) => (
          <AlbumCard album={album} />
        ))}
      </Body>
    </Layout>
  );
}
