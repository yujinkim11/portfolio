import styled from "styled-components";
import { mainStyle } from "./globalstyle";
import logo from "./images/portlogo.png";

const HeaderWrap = styled.div`
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
    margin-left: 50px;
  }
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <img src={logo} width="220px" height="100px" alt="logo" />
      </Logo>
      <MenuWrap>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>PROJECT</li>
        <li>CONTACT</li>
      </MenuWrap>
    </HeaderWrap>
  );
};
