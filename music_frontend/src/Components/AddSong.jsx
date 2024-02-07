
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postSong, updateSong } from "../sagas/songs/songsSlice";

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Title = styled.h1`
  color:  #003060;
`;
const Modal = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 16px;
  border: none;
  background-color: #f3f3f3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

  const Button = styled.button`
  padding: 12px 32px;
  border-radius: 17px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-right: 8px;
  cursor: pointer;
  background: #003060
`;

const SecondaryButton = styled(Button)`
  background-color: #d1d1d1;
`;

const AddSong = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(props.song ? props.song.title : "");
  const [artist, setArtist] = useState(props.song ? props.song.artist : "");
  const [album, setAlbum] = useState(props.song ? props.song.album : "");
  const [genre, setGenre] = useState(props.song ? props.song.genre : "");

  if (!props.visible) {
    return null;
  }

  const data = { title, artist, album, genre };

  const handleAdd = (e) => {
    e.preventDefault();
 
    // dispatch(postSong(data));
    // setTitle("");
    // setArtist("");
    // setAlbum("");
    // setGenre("");
    // window.location.reload();
    console.log(data,'dataaaaaaaaaaaa')
  };

  if (props.song) {
    var updatedSong = {
      id: props.song._id || null,
      title,
      artist,
      album,
      genre,
    };
  }

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   dispatch(updateSong(updatedSong));
  //   setTitle("");
  //   setArtist("");
  //   setAlbum("");
  //   setGenre("");
  //   window.location.reload();
  // };

  // const handleSubmit = (e) => {
  //   props.song ? handleUpdate(e) : handleAdd(e);
  // };

  return (
    <Overlay onClick={props.handleCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>{props.song ? "Update Song" : "Add New Song"}</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder=" title"
          />

          <Input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            type="text"
            placeholder=" artist"
          />

          <Input
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            type="text"
            placeholder=" album"
          />

          <Input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            type="text"
            placeholder=" genre"
          />

          <ButtonContainer>
            <Button type="submit">
              {props.song ? "Update Song" : "Add Song"}
            </Button>
            <SecondaryButton onClick={props.handleCancel}>Cancel</SecondaryButton>
          </ButtonContainer>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default AddSong;