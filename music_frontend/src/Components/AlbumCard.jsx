
import styled from "styled-components";

import image1 from "../images/img8.jpg";

const SongCard = styled.div`
  background: #f5f5f5;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  margin-top: 18px;
  font-size: 14px;
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const TextContainer = styled.div`
  display: block;
  align-items: center;
  gap: 24px;

`;

const Album = styled.div`
font-size: 20px;
color: #003060;
padding-bottom:5px;

`;
export default function Song({ album }) {


  return (
    <SongCard>
      <ImageContainer>
        <Image src={image1} alt="Play" />
       <TextContainer>
       <Album>{album.album}</Album>
       {album.artist}
       </TextContainer>
    
      </ImageContainer>

      <TextContainer>
      {album.songs} Songs
      </TextContainer>

    </SongCard>
  );
}