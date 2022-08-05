import styled, { keyframes } from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import coding from "./images/coding.png";
import { Project } from "./Project";

const AllWrap = styled.div`
  height: 100vh;
`;

const MainWrap = styled.div`
  margin-top: 50px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  margin-left: 100px;
  width: 45%;
  h3 {
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 50px;
  }
`;

const Title = styled.h3`
  font-size: 70px;
`;

const Right = styled.div`
  margin-right: 100px;
`;
const Img = styled.div`
  width: 660px;
  height: 660px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Button = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  .github {
    color: white;
  }
`;
const Resume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 60px;
  background-color: #353535;
  border-radius: 30px;
  margin-right: 30px;
  :hover {
    color: ${mainStyle.point};
    cursor: pointer;
  }
`;
const Git = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #353535;

  :hover {
    color: ${mainStyle.point};
    cursor: pointer;
  }
`;

const ProjectScroll = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 26px;
  margin-bottom: 200px;
  animation: move 2s alternate infinite;
  @keyframes move {
    0% {
    }
    100% {
      transform: translateY(50px);
    }
  }
  :hover {
    color: ${mainStyle.point};
    cursor: pointer;
  }
`;

const WhiteSpace = styled.div`
  height: 250px;
`;

export const Main = () => {
  return (
    <>
      <AllWrap>
        <MainWrap>
          <Left>
            <Title>
              <h3>끊임없이 성장하는</h3>
              <h3>프론트엔드 개발자</h3>
              <h3>김유진입니다.</h3>
            </Title>
            <Button>
              <Resume>이력서.pdf</Resume>
              <a
                target="_blank"
                href="https://github.com/yujinkim11"
                className="github"
              >
                <Git>Git</Git>
              </a>
            </Button>
          </Left>
          <Right>
            <Img>
              <img src={coding} width="660px" height="660px" alt="coding" />
            </Img>
          </Right>
        </MainWrap>
        <ProjectScroll onClick={() => window.scrollTo({ top: 1100 })}>
          ⇓ 프로젝트 보러가기 ⇓
        </ProjectScroll>
        <Project />
        <WhiteSpace />
      </AllWrap>
    </>
  );
};
