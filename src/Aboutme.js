import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import me from "./images/me.png";
import { Link } from "react-router-dom";

const AboutmeWrap = styled.div``;

const BoxWrap = styled.div`
  padding: ${mainStyle.padding};
  display: flex;
  align-items: center;
  margin-top: 70px;
`;

const Left = styled.div`
  width: 600px;
  height: 600px;
`;

const Right = styled.div`
  width: 800px;
  margin-left: 80px;
`;
const AboutCon = styled.h3`
  h4 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;
  }
  margin-bottom: 50px;
`;

const Future = styled.p`
  h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  margin-bottom: 50px;
`;

const SkillWrap = styled.div`
  margin-top: 120px;
  height: 80vh;
  padding: ${mainStyle.padding};
  text-align: center;
`;
const Skill = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const Lang = styled.div`
  margin-top: 50px;
  img {
    margin-right: 30px;
    :nth-child(5) {
      margin-right: 0;
    }
  }
  p {
    font-size: 25px;
    line-height: 20px;
    font-weight: 300;
  }
  .first {
    margin-top: 70px;
  }
  span {
    font-weight: 500;
    color: ${mainStyle.point};
  }
`;

const ImgTool = styled.div`
  margin-top: 100px;
  font-size: 40px;
  font-weight: 700;
  img {
    margin-top: 70px;
    :nth-child(2) {
      margin-right: 30px;
    }
  }
  p {
    margin-top: 70px;
    font-size: 25px;
    line-height: 20px;
    font-weight: 300;
  }

  span {
    font-weight: 500;
    color: ${mainStyle.point};
  }
`;

const Study = styled.div`
  h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
`;

const ProjectGo = styled.div`
  text-align: center;
  margin-top: 500px;
`;

const ProjectScroll = styled.div`
  text-align: center;
  font-size: 26px;
  margin-bottom: 100px;

  :hover {
    color: ${mainStyle.point};
    cursor: pointer;
  }
`;

export const Aboutme = () => {
  return (
    <AboutmeWrap>
      <BoxWrap>
        <Left
          style={{
            background: `url(${me}) no-repeat center / cover`,
          }}
        />
        <Right>
          <AboutCon>
            <h4>안녕하세요. 프론트엔드 개발자 신입 김유진입니다.</h4>
            <p>
              고등학생때부터 사이트들은 어떻게 만들어지는지에 호기심이 생겨서
              직접 티스토리를 꾸미고 배워가면서 제로보드와 php를 이용해서
              홈페이지를 직접 만들어본 경험이 있습니다.
              <br />
              그때의 기억을 되살리다 흥미와 뿌듯함을 느끼며 일할수 있는
              프론트엔드 개발자의 매력을 느끼게 되었고 개발자의 꿈을 가지게
              되었습니다.
              <br />
              <br />
              새로운 것을 배우고 익히는 것에 거부감이 없고 오히려 그 과정에서
              즐거움을 느낍니다.
              <br />
              이전에 카페에서 직원으로 근무할 때는 제과제빵 자격증을 공부하며
              필기 시험에 합격하였고, 개발자의 꿈을 꾸면서 UIUX에 관심을
              가지면서 포토샵을 배우고 자격증 시험을 쳤습니다.
              <br />
              그렇게 익힌 지식들을 실무에서, 제가 직접 사용해낼 때 더욱 더
              뿌듯함을 얻습니다.
              <br />
              앞으로도 더 성장하기 위해 꾸준히 흥미를 잃지않고 배우고 싶습니다.
            </p>
          </AboutCon>

          <Future>
            <h5>포부</h5>
            회사에서 협업의 중요성을 알고 팀원들과의 소통을 중요하게 생각하며
            <br />
            서로에게 도움이 되는 동료가 되고 싶습니다.
            <br />
            그런 동료가 될 수 있도록 노력하며 행동하겠습니다.
          </Future>

          <Study>
            <h5>수료 과정</h5>
            SBS아카데미컴퓨터아트학원 - UIUX 프론트엔드 개발자양성과정
            <br />
            (2022.04.12 ~ 2022.07.29)
          </Study>
        </Right>
      </BoxWrap>
      <SkillWrap>
        <Skill>
          <h3>Skill</h3>
          <Lang>
            <img
              src="https://t1.daumcdn.net/cfile/tistory/2149683A58CA6BF313"
              width="180px"
              height="200px"
            />
            <img
              src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
              width="180px"
              height="200px"
            />
            <img
              src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
              width="180px"
              height="200px"
            />
            <img
              src="https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png"
              width="180px"
              height="200px"
            />
            <img
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDGM2Y%2FbtqwIi3c40a%2FtbVlnqOBH5ovawaVBCmEF0%2Fimg.png"
              width="180px"
              height="200px"
            />
            <p className="first">
              <span>ES6 이상의 문법</span> 사용하여 자바스크립트를 사용할 수
              있습니다.
            </p>
            <br />
            <p>
              <span>웹표준 기반 태그</span>를 사용하고, 애니메이션을 사용합니다.
            </p>
            <br />
            <p>
              React를 사용하여 개발할 수 있고 <span>React Hooks</span>를 사용할
              수 있습니다.
            </p>
            <br />
            <p>
              <span>styled-components</span>를 이용하여 개발합니다.
            </p>
            <br />
            <p>
              <span>Nodejs</span>를 사용하여 개발할 수 있습니다.
            </p>
          </Lang>
          <ImgTool>
            <h3>Image Edit Tool</h3>
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTExMjFfMTcy/MDAxNTc0MzM0MDc2Nzk0.e8pMq16clsY1YxVLCDkh2L1IOfc9zq5x7XyxzMIkRoAg.B2k1RWDVVRy02emeuUova8tZmyC9Ha6tqN3wKSYdVwog.PNG.nanona3260/2020.png?type=w800"
              width="180px"
              height="200px"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
              width="180px"
              height="200px"
            />
            <p>
              Adobe Photoshop, XD를 이용하여{" "}
              <span>이미지 편집, 웹사이트 디자인</span>을 할 수 있습니다.
            </p>
          </ImgTool>
        </Skill>
      </SkillWrap>

      <ProjectGo>
        <Link to="/project">
          <ProjectScroll>✔ 프로젝트 보러가기 ✔</ProjectScroll>
        </Link>
      </ProjectGo>
    </AboutmeWrap>
  );
};
