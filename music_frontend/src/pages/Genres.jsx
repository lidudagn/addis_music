import GenreCard from "../Components/GenreCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenresFetch } from "../sagas/genres/genresSlice";



const Body = styled.div`
  margin-top:90px;
  background: white;
  border-radius: 4px;
  padding: 32px;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 12px;

`;

export default function Genres() {
  const genres = useSelector((state) => state.genres.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresFetch());
  }, [dispatch]);

  return (
    <Layout>
   
      <Body>
        {genres.map((genre) => (
          <GenreCard genre={genre} />
        ))}
      </Body>
    </Layout>
  );
}
