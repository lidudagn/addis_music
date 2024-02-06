
import styled from "styled-components";

import image1 from "../images/img1.jpg";

const ArtistCard = styled.div`
  background: #f5f5f5;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 14px;
  margin-top: 18px;
  font-size: 15px;
  color:  #003060;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
const Number = styled.p`
  color: grey;
  font-size: 12px;
  font-weight: light;
  line-height: 0;
  margin-top: 12px;
`;
const Image = styled.img`
  width: 120px; /* Adjust the width to your desired size */
  height: 80px; /* Adjust the height to your desired size */
  object-fit: cover;
  border-radius: 6px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const NumberContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
`;



export default function Song({ artist }) {




  return (
    <ArtistCard>
      <ImageContainer>
        <Image src={image1} alt="Play" />
        <p>{artist.name}</p>
     
      </ImageContainer>
   
      <NumberContainer>
      <Number>
        {artist.songs} Albums | {artist.albums} Songs
      </Number>
      </NumberContainer>
     
    </ArtistCard>
  );
}