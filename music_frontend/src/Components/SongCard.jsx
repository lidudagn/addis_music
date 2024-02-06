import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteSong } from "../sagas/songs/songsSlice";
import { useState } from "react";
import AddSong from "./AddSong";
import image1 from "../images/img9.jpg";

const SongCard = styled.div`
  background: #f5f5f5;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  margin-top: 18px;
  font-size: 14px;
  color: #353d2f;
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

const Button = styled.button`
  padding: 12px 2px;
  border-radius: 17px;
  border: none;
  font-size: 14px;
  margin-right: 8px;
  cursor: pointer;
  color: ${(props) => (props.edit ? "#003060" : "red")};
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export default function Song({ song }) {
  const dispatch = useDispatch();

  const handleSongDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSong(song._id));
    window.location.reload();
  };

  // Handle updating a song
  const [updateSong, setUpdateSong] = useState(false);

  const handleCancel = () => {
    setUpdateSong(false);
  };

  const handleAdd = () => {
    setUpdateSong(true);
  };

  return (
    <SongCard>
      <ImageContainer>
        <Image src={image1} alt="Play" />
        <p>{song.title}</p>
      </ImageContainer>

      <ImageContainer>
        <Button onClick={handleAdd} edit={true}>
          Edit
        </Button>
        <Button onClick={handleSongDelete} edit={false}>
          Delete
        </Button>
      </ImageContainer>
      <AddSong song={song} visible={updateSong} handleCancel={handleCancel} />
    </SongCard>
  );
}