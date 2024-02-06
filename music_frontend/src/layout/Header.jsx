import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_HEADER_LINKS } from "../constants/DASHBOARD_HEADER_LINKS";
import { BsFillSkipEndBtnFill } from "react-icons/bs";
import styled from "styled-components";
import AddSongButton from "./AddSongButton";

const Head = styled.div`
padding-bottom:10px;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: #003060;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  padding-right: 30px;
  display: flex;
  gap:10px;
  flex-direction: row;
  align-items: flex-start;


`;

const StyledLink = styled(Link)`
margin-top:15px;
  width: 100%;
  color: ${({ color }) => color};
  padding: 5px 14px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: normal;
  text-decoration: none;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid white" : "none")};
`;

const IconContainer = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

const StyledIcon = styled(BsFillSkipEndBtnFill)`
  padding-right: 10px;
  padding-top: 10px;
  vertical-align: middle;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 28px;
  vertical-align: middle;
  margin: 0;
  padding-top: 10px;
`;

const Header = () => {
  return (
    <Head>
      <IconContainer>
        <Link to="/">
          <StyledIcon size="40" color="white" />
        </Link>
        <StyledSpan>MusicMosaic</StyledSpan>
      </IconContainer>

      <StyledDiv>
        {DASHBOARD_HEADER_LINKS.map((item) => (
          <HeaderLink key={item.key} item={item} />
        ))}
      </StyledDiv>
      <AddSongButton />
    </Head>
  );
};

function HeaderLink({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const color = isActive ? "grey" : "white";
  return (
    <>
      <StyledLink isActive={isActive} color={color} to={item.path}>
        {item.label}
      </StyledLink>
    </>
  );
}

export default Header;