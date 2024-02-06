import { useState } from "react";
import styled from "styled-components";
import AddSong from "../Components/AddSong";

const Container = styled.div`
display:flex;
justify-content:center;
margin:15px 30px;
border-radius: 5px;
border: 2px solid white;
  
`;

const Button = styled.button`


padding:7px;
  border: none;
  font-size: 14px;
  weight: normal;
  color: #003060;
  background:white;
  
`;

const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 0;

`;

export default function AddSongButton() {
  const [addSong, setAddSong] = useState(false);

  const handleCancel = () => {
    setAddSong(false);
  };

  const handleAdd = () => {
    setAddSong(true);
  };

  return (
    <Container>
      <Button onClick={handleAdd}>Add Song</Button>

      {addSong && <BlurredBackground />}
      <AddSong visible={addSong} handleCancel={handleCancel} />
    </Container>
  );
}