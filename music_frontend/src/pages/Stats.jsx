import StatsCard from "../Components/StatsCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStatsFetch } from "../sagas/stats/statsSlice";
import image1 from "../images/img1.jpg";
import image2 from "../images/img9.jpg";
import image3 from "../images/img8.jpg";
import image4 from "../images/img6.jpg";

const Body = styled.div`
  background: white;
  margin-top:90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width:100%

`;

export default function Stats() {
  const stats = useSelector((state) => state.stats.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatsFetch());
  }, [dispatch]);

  return (
    <Layout>

      <Body>
        <StatsCard img={image1} label="Artists" artists number={stats.artists} />
        <StatsCard  img={image2} label="Songs" songs number={stats.songs} />
        <StatsCard  img={image3} label="Albums" albums number={stats.albums} />
        <StatsCard  img={image4} label="Genres" number={stats.genres} />
      </Body>
    </Layout>
  );
}
