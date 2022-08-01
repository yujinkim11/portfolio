import styled from "styled-components";
import { mainStyle } from "./globalstyle";

const MainWrap = styled.div`
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 50%;
  h3 {
    font-size: 60px;
  }
`;

const Title = styled.h3`
  font-size: 60px;
`;

const Right = styled.div``;
const Img = styled.div`
  width: 660px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Main = () => {
  return (
    <MainWrap>
      <Left>
        <Title>
          <h3>끊임없이 성장하는</h3>
          <h3>프론트엔드 개발자</h3>
          <h3>김유진입니다.</h3>
        </Title>
      </Left>
      <Right>
        <Img></Img>
      </Right>
    </MainWrap>
  );
};
