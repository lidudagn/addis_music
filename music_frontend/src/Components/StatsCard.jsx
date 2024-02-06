import React from "react";
import styled from "styled-components";


const Card = styled.div`

  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-top: 26px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 45%;
  height:140px
  
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  margin-right: 16px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  margin-left:15px;
  border-radius: 10px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const Label = styled.p`
  color: #333;
  font-size: 16px;
  margin-top: 8px;
`;

const Number = styled.h1`
  color: #333;
  font-size: 48px;
  font-weight: bold;
  line-height: 0;
`;

export default function StatsCard(props) {
  const { number, label,img } = props;


  return (
    <Card>
      
      <ImageContainer>
        <Image imageUrl={img} />
      </ImageContainer>
      <TextContainer>
        <Number>{number}</Number>
        <Label>{label}</Label>
      </TextContainer>
    </Card>
  );
}