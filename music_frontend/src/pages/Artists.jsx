import ArtistCard from "../Components/ArtistCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArtistsFetch } from "../sagas/artists/artistsSlice";


const Body = styled.div`
  background: white;
  margin-top:90px;
  padding: 32px;
  row-gap: 12px;
  column-gap: 12px;

`;

export default function Artists() {
  const artists = useSelector((state) => state.artists.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistsFetch());
  }, [dispatch]);

  return (
    <Layout>
    
      <Body>
        {artists.map((artist) => (
          <ArtistCard artist={artist} />
        ))}
      </Body>
    </Layout>
  );
}
