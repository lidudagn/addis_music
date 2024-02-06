
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`


  background:white
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 48px;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header/>
      <Content>
  
        {children}
      </Content>
    </Container>
  );
}
