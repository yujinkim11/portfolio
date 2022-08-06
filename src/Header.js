import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  font-family: "Black Han Sans", sans-serif;
  margin-top: 10px;
  padding: ${mainStyle.padding};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h3`
  font-size: 35px;
`;
const MenuWrap = styled.ul`
  display: flex;
  li {
    font-size: 25px;
    font-weight: 700;
    margin-left: 50px;
    :hover {
      color: ${mainStyle.point};
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Link to={"/"}>
        <Logo>
          <img src={logo} width="220px" height="100px" alt="logo" />
        </Logo>
      </Link>
      <MenuWrap>
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/aboutme"}>
          <li>ABOUT ME</li>
        </Link>
        <Link to={"/project"}>
          <li>PROJECT</li>
        </Link>
        <Link to={"/contact"}>
          <li>CONTACT</li>
        </Link>
      </MenuWrap>
    </HeaderWrap>
  );
};
